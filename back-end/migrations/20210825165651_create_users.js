
exports.up = function(knex) {
    return knex.schema.createTable('users', table => {
      table.increments('id'); // adds an auto incrementing PK column
      table.string('name').notNullable();
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTableIfExists('users');
  };
