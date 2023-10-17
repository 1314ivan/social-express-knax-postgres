module.exports = class LoginDto {
  constructor(data) {
    // TODO
    if (!data.login) throw new Error('Необходимо указать login')
    if (!data.password) throw new Error('Необходимо указать password')
    this.login = data.login
    this.password = data.password
  }
}
