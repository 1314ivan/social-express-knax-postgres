const sessionChecker = require('../middleware/sessionChecker') 

module.exports = function (app) {
  const commonApi = [
   "common",
   "auth"
  ]
  const api = [
    "users",
    "timers"
  ]

  for (let apiRoute of commonApi) {
    let prefix = `/api/${apiRoute}`
    app.use(prefix, require(`.${prefix}`))
  }
  for (let apiRoute of api) {
    let prefix = `/api/${apiRoute}`
    app.use(prefix, sessionChecker, require(`.${prefix}`))
  }
 
}
