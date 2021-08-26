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
 const { bookId } = req.params;
 console.log(bookId);
 if ( bookId ) {
   await knex
      .select('*')
      .from('check_outs')
      .where('book_id', bookId)
      .then(data => res.status(200).json(data))
      .catch(err =>
        res.status(404).json({
          message:
            'The data you are looking for could not be found. Please try again'
    }));
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
  console.log(req);
  res.status(200).json({
    message: 
      'This is the POST /api/books/:bookId/checkout/:userId endpoint!'
  })   
});

app.post('/api/books/:bookId/return', async function(req, res) {
  console.log(req);
  res.status(200).json({
    message: 
      'This is the POST /api/books/:bookId/return endpoint!'
  })   
});

//app.delete()


app.get('/', (req, res) => {
 res.send('Hello World! Use /books endpoint for data!')
})



module.exports = app;