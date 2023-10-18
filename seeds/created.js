/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('permissions').del()
  await knex('routers').del()
  await knex('users').del()
  await knex('roles').del()

  let roles = await knex('roles')
    .insert([
      { name: 'Админ', code: 'admin' },
      { name: 'Пользователь', code: 'user' }
    ])
    .returning('*')

    rolesObj = Object.fromEntries(roles.map(el => [el.code, el.id]))

  let routers = await knex('routers')
    .insert([
      { name: 'Пользователи', code: 'users' },
      { name: 'Роли', code: 'roles' },
      { name: 'Разрешения', code: 'permissions' }
    ])
    .returning('*')
  routersObj = Object.fromEntries(routers.map(el => [el.code, el.id]))
  const [admin] = await knex('users')
    .insert([{ login: 'test2', password: 'Welcome1', role_id: rolesObj.admin }])
    .returning('*')
   await knex('permissions')
    .insert([
      ...routers.map(el => {
        return { role_id: rolesObj.admin, router_id: el.id, GET: true, POST: true, DELETE: true, PATCH: true }
      })
    ])
    .returning('*')
}
