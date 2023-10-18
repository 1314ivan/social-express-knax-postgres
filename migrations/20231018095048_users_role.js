/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.table('users', function (table) {
    table.integer('role_id').notNullable()
    table.foreign('role_id').references("roles.id").onDelete("RESTRICT") 
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
 return knex.schema.table('users', function (table) {
    table.dropColumn('role_id');
  })
  
};
