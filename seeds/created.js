/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('users').del()
  await knex('roles').del()
  
  let roles = await knex('roles')
    .insert([
      { name: 'Админ', code: 'admin' },
      { name: 'Пользователь', code: 'user' }
    ])
    .returning('*')

  roles = Object.fromEntries(roles.map(el => [el.code, el.id]))
  
  const [admin] = await knex('users')
    .insert([{ login: 'test2', password: 'Welcome1', role_id: roles.admin }])
    .returning('*')
}
