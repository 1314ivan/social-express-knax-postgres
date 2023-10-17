class CommonService {
  async ping() {
    return 'OK'
  }
}
module.exports = new CommonService()