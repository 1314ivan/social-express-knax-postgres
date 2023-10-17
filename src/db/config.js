require('dotenv').config()

const config = {
  client: 'pg',
  connection: {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    database: process.env.DB_NAME,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD
  },
  migrations: {
    tableName: 'knex_migrations'
  }
}

const db = require('knex')(config)

module.exports = { db, config }
