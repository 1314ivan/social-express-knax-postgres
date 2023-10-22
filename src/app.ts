import express from 'express'
import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'
import cors from 'cors'
import dotenv from 'dotenv'
import { promises as fsPromise } from 'fs'
import swaggerUi from 'swagger-ui-express'
import { api } from './routers/index'
const app = express()
const port = process.env.PORT || 3000
const host = process.env.HOST || 'localhost'
import { join } from 'path'
import { readdirSync } from 'fs'
import swaggerAutogen from 'swagger-autogen'
import { LoginDto } from './dto/auth/login.dto'
import { User } from './db/tables/user.entity'
import { Session } from './db/tables/session.entity'
import { CreateUserDto } from './dto/users/createUser.dto'
// import { SessionSwagger } from '../db/tables/session.entity'

const swaggerDoc = {
  info: {
    title: 'API',
    description: 'API'
  },
  definitions: Object.fromEntries(
    [LoginDto, User, Session, CreateUserDto].map(model => {
      const { name, exampleData } = (model as any)[`swagger${model.name}`]()
      return [name, exampleData]
    })
  ),
  host: `${host}:${port}`,
  schemes: ['http']
}
dotenv.config()
async function start() {
  const outputFile = join(__dirname, '../output.json')
  const endpointsFiles = readdirSync(join(__dirname, './routers/api')).map(apiName =>
    join(__dirname, `./routers/api/${apiName}`)
  )
  await swaggerAutogen({ basePath: 'api' })(outputFile, endpointsFiles, swaggerDoc)
  const content = await fsPromise.readFile(join(__dirname, '../output.json'), 'utf8')
  const swaggerFile = JSON.parse(content)
  app.use('/api/doc', swaggerUi.serve, swaggerUi.setup(swaggerFile))
  app.use(bodyParser.json({ limit: '10mb' }))
  app.use(cookieParser())
  app.use(
    bodyParser.urlencoded({
      extended: true,
      limit: '10mb'
    })
  )
  app.use(cors())
  api(app)

  app.listen(+port, host, () => {
    console.log(`app start http://${host}:${port}`)
  })
}
start()
