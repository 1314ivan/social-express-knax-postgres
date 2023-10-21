import express from 'express'
import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'
import cors from 'cors'
import dotenv from 'dotenv'
import {promises as fsPromise} from 'fs'
import swaggerUi from 'swagger-ui-express'
import { join } from 'path'
const app = express()
const port = process.env.PORT || 3000

dotenv.config()
async function start() {
 const content = await fsPromise.readFile(join(__dirname, './swagger/output.json') , 'utf8');
    const swaggerFile = JSON.parse(content );
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

