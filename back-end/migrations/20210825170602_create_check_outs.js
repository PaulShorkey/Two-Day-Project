
exports.up = function(knex) {
    return knex.schema.createTable('check_outs', table => {
      table.increments('id'); // adds an auto incrementing PK column
      table.integer('book_id')
           .references('id')
           .inTable('books');
      table.integer('user_id')
           .references('id')
           .inTable('users');
      table.date('borrow_date');
      table.specificType('due_date', knex.raw(`date GENERATED ALWAYS AS (borrow_date + 14) STORED`));
      table.date('return_date');
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTableIfExists('check_outs');
  };