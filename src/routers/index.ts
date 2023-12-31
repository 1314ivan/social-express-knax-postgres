const sessionChecker = require('../middleware/sessionChecker')

export = function (app) {
  const commonApi = ['common', 'auth']
  const api = ['users', 'timers', 'roles']

  for (let apiRoute of commonApi) {
    let prefix = `/api/${apiRoute}`
    app.use(prefix, require(`.${prefix}`))
  }
  for (let apiRoute of api) {
    let prefix = `/api/${apiRoute}`
    app.use(prefix, sessionChecker, require(`.${prefix}`))
  }
}
