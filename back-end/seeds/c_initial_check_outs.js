
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('check_outs').del()
    .then(function () {
      // Inserts seed entries
      return knex('check_outs').insert([
        {book_id: 1, user_id: 1, borrow_date: '2018-11-30' },
        {book_id: 2, user_id: 2, borrow_date: '2018-07-04', return_date: '2018-07-15'}
      ]);
    });
};
