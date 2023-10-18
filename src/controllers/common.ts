
import commonService from '../services/common'


export  class CommonController {
  static async ping(req, res) {
    const ping = await commonService.ping()
    res.send(ping).status(200)
  }
}

