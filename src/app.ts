import express from 'express'
import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'
import cors from 'cors'
import dotenv from 'dotenv'
const app = express()
const port = process.env.port || 3000

dotenv.config()

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
app.use((err, req, res) => {
  console.log('ssss')
})

app.listen(port, () => {
  console.log(`app start http://localhost:${port}`)
})
