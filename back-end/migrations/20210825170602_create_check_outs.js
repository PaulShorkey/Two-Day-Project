
exports.up = function(knex) {
    return knex.schema.createTable('check_outs', table => {
      table.increments('id'); // adds an auto incrementing PK column
      table.integer('book_id')
           .references('id')
           .inTable('books');
      table.integer('user_id')
           .references('id')
           .inTable('users');
      table.timestamps(true, true);
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTableIfExists('check_outs');
  };