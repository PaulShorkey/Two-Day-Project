
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('books').del()
    .then(function () {
      // Inserts seed entries
      return knex('books').insert([
        {book_title: 'The Great Gatsby', author:'Scooby', isbn_number:'01', is_checked_out:true},
        {book_title: 'The Art of War', author:'Ty', isbn_number:'02', is_checked_out:false},
        {book_title: 'The War of Art', author:'Lincoln', isbn_number:'03', is_checked_out:false},
        {book_title: 'Frendle', author:'Putin', isbn_number:'04', is_checked_out:false},
        {book_title: 'The Cat in the Hat', author:'Earnest Hemmingway', isbn_number:'015', is_checked_out:false},

      ]);
    });
};
