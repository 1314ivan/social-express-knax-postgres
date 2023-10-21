import dotenv from 'dotenv'
import knex from 'knex'
dotenv.config()
export default knex({
  client: 'pg',
  connection: {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT as unknown as number,
    database: process.env.DB_NAME,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD
  },
  migrations: {
    tableName: 'knex_migrations'
  }
})
