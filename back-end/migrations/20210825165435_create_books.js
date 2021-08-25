
exports.up = function(knex) {
    return knex.schema.createTable('books', table => {
      table.increments('id'); // adds an auto incrementing PK column
      table.string('book_title').notNullable();
      table.string('author');
      table.string('isbn_number');
      table.boolean('is_checked_out').defaultTo(false);
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTableIfExists('books');
  };
