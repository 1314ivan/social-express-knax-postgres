const express = require('express')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const cors = require('cors')
const app = express()
const port = process.env.port || 3000


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
app.use((err, req, res)=>{
  console.log("ssss")

})

app.listen(port, () => {
  console.log(`app start http://localhost:${port}`)
})
