export class LoginDto {
  login: string
  password: string
  constructor(data: LoginDto) {
    // TODO
    if (!data.login) throw new Error('Необходимо указать login')
    if (!data.password) throw new Error('Необходимо указать password')
    this.login = data.login
    this.password = data.password
  }
  static swaggerLoginDto() {
    return { name: 'login', exampleData: { login: 'ivan', password: ' 21222222' } }
  }
}
