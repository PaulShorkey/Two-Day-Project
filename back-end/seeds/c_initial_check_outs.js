
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('check_outs').del()
    .then(function () {
      // Inserts seed entries
      return knex('check_outs').insert([
        {book_id: 1, user_id: 1},
        {book_id: 2, user_id: 2}
      ]);
    });
};
