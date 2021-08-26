const express = require('express');
const app = express();
var cors = require('cors');
const knex = require('knex')(require('./knexfile.js').development);

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/api/books/', function(req, res) {
 knex
   .select('*')
   .from('books')
   .then(data => res.status(200).json(data))
   .catch(err =>
     res.status(404).json({
       message:
         'The data you are looking for could not be found. Please try again'
     })
   );
});

app.get('/api/books/:bookId', async function(req, res) {
  try {
    const { bookId } = req.params;
    
    if( bookId) {

      const bookQuery = await knex.select('*')
        .from('books')
        .leftJoin('check_outs', 'books.id', 'check_outs.book_id')
        .where('books.id', bookId)
        .first();
      
      if( !bookQuery ) {
        res.status(404).send({ message: 'bookId does not exist.'});
      }
      res.status(200).send(bookQuery);

    } else {
      res.status(422).send({ message: 'No bookId supplied.'})
    }
  } catch (err) {
    res.status(500).send(err);
  }
 });

app.get('/api/books/:bookId/checkout/:userId', async function(req, res) {
  const { bookId, userId } = req.params;
  console.log(req.params);
  res.status(200).json({
    message: 
      'This is the GET /api/books/:bookId/checkout/:userId endpoint!'
  })   
});

app.post('/api/books/:bookId/checkout/:userId', async function(req, res) {
  
  try { 

    const bookId  = req.params.bookId++;
    const userId  = req.params.userId++;
    
    if( bookId && userId ) {
      //computes currentDate
      var today = new Date();
      var currentDate = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
      //checking if book is checked out
      const { is_checked_out }  = await knex
        .select('is_checked_out')
        .from('books')
        .where('id', bookId)
        .first()
      
      if(!is_checked_out){
        const insertQuery = await knex('check_outs')
          .insert([{
            book_id: bookId,
            user_id: userId,
            borrow_date: currentDate
          }])
        if( insertQuery ) {
          const updateQuery = await knex('books')
            .update('is_checked_out', true)
            .where('id', bookId);
          res.status(200).send({ message: 'Book is successfully checked out.'});
        }
      } else {
        res.status(200).send({ message: 'Book is not available.'});
      }

    } else {
      res.status(422).send({ message: 'bookId or userId was not supplied.'})
    }
  } catch (err) {
    res.status(500).send(err);
  }
});

app.post('/api/books/:bookId/return', async function(req, res) {

  try { 
    const bookId = req.params.bookId++;
    if( bookId ) {
     
      var today = new Date();
      var currentDate = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
      const { is_checked_out }  = await knex
        .select('is_checked_out')
        .from('books')
        .where('id', bookId)
        .first()
      console.log(typeof is_checked_out, is_checked_out);
      if (is_checked_out) {
        
        const updateCheckOutsQuery = await knex('check_outs')
          .update('return_date', currentDate)
          .where('book_id', bookId)
          
        const updateBooksQuery = await knex('books')
          .update('is_checked_out', false)
          .where('id', bookId)
        
        res.status(200).send({ message: 'Book is returned.'});

      } else {
        res.status(200).send({ message: 'Book is not checked out'});
      }
    } else {
      res.status(422).send({ message: 'bookId or userId was not supplied.'})
    }
  } catch (err) {
    res.status(500).send(err);
  }  
});

//app.delete()


app.get('/', (req, res) => {
 res.send('Hello World! Use /books endpoint for data!')
})



module.exports = app;