module.exports = class CreateUserDto {
  constructor(data) {
    // TODO
    if (!data.login) throw new Error('Необходимо указать login')
    if (!data.name) throw new Error('Необходимо указать name')
    if (!data.password) throw new Error('Необходимо указать password')
    this.login = data.login
    this.name = data.name
    this.password = data.password
  }
}
