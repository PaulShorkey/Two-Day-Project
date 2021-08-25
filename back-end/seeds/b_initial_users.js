
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {name: 'John Doe'},
        {name: 'Ben Affleck'},
        {name: 'Phil Doctor'},
        {name: 'Tommy Moala'},
        {name: 'Steve Budai'}
      ]);
    });
};


