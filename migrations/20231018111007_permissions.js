/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('permissions', function (table) {
    table.increments('id')
    table.integer('role_id').notNullable()
    table.foreign('role_id').references("roles.id").onDelete("CASCADE") 
    table.integer('router_id').notNullable()
    table.foreign('router_id').references("routers.id").onDelete("CASCADE") 
    table.boolean('GET').defaultTo(false).notNullable() 
    table.boolean('POST').defaultTo(false).notNullable() 
    table.boolean('PATCH').defaultTo(false).notNullable() 
    table.boolean('DELETE').defaultTo(false).notNullable() 
  })
  
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable("permissions")
};
