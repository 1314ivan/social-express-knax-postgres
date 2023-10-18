/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('sessions', function (table) {
    table.increments('id')
    table.integer('user_id').notNullable()
    table.foreign('user_id').references("users.id").onDelete("CASCADE") 
    table.string('session_id', 255).notNullable().unique()
    table.json('data').notNullable()
    table.timestamp('created_at').notNullable().defaultTo(knex.fn.now())
    table.timestamp('updated_at').notNullable().defaultTo(knex.fn.now())
  })
  
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable('sessions')
  
};
