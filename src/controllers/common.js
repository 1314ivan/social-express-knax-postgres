const commonService = require('../services/common')

class CommonController {
  static async ping(req, res) {
    const ping = await commonService.ping()
    res.send(ping).status(200)
  }
}
module.exports = CommonController
