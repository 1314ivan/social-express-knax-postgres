import express from 'express'
import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'
import cors from 'cors'
import dotenv from 'dotenv'
import { promises as fsPromise } from 'fs'
import swaggerUi from 'swagger-ui-express'

const app = express()
const port = process.env.PORT || 3000
import { join, dirname } from 'path'
import {readdirSync} from 'fs'
import { fileURLToPath } from 'url'
import swaggerAutogen from 'swagger-autogen'
// import { SessionSwagger } from '../db/tables/session.entity'

const doc = {
  // общая информация
  info: {
    title: 'Todo API',
    description: 'My todo API'
  },
  // что-то типа моделей
  definitions: {
    // SessionSwagger,
    // модель задачи
    Todo: {
      id: '1',
      text: 'test',
      done: false
    },
    // модель массива задач
    Todos: [
      {
        // ссылка на модель задачи
        $ref: '#/definitions/Todo'
      }
    ],
    // модель объекта с текстом новой задачи
    Text: {
      text: 'test'
    },
    // модель объекта с изменениями существующей задачи
    Changes: {
      changes: {
        text: 'test',
        done: true
      }
    }
  },
  host: 'localhost:3000',
  schemes: ['http'] 
}


// // путь и название генерируемого файла
const outputFile = join(__dirname, '../output.json')
console.log(outputFile) 
// // массив путей к роутерам
// const endpointsFiles = readdirSync(join(__dirname, './routers/api')).map(apiName=> join(__dirname, `./routers/api/${apiName}`)) 

// swaggerAutogen( {basePath: 'api', })(outputFile, endpointsFiles, doc).then(success => {
//   if (success) {
//     console.log(`Generated: ${success.success}`)
//   }
// })

dotenv.config()
async function start() {
  const content = await fsPromise.readFile(join(__dirname, '../output.json'), 'utf8')
  const swaggerFile = JSON.parse(content)
  // console.log(swaggerFile)
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
  require('./routers')(app)

  app.listen(+port, 'localhost', () => {
    console.log(`app start http://localhost:${port}`)
  })
}
start()
