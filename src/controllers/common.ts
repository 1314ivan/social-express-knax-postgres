
import commonService from '../services/common.services'


export  class CommonController {
  static async ping(req, res) {
    const ping = await commonService.ping()
    res.send(ping).status(200)
  }
}

