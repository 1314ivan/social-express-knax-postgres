export interface IGetUser {
  id: number
  login: string
  role_id: number
}

export class User {
  constructor(data: User) {
    if (!data) return
    if (data.id) {
      this.id = data.id
    }
    this.login = data.login
    this.password = data.password
    this.role_id = data.role_id
  }

  id!: number
  login!: string
  private password!: string
  role_id!: number

  get(): IGetUser {
    return { id: this.id, login: this.login, role_id: this.role_id }
  }

  isCorrectPassword(input: string) {
    return input === this.password
  }

  static swaggerUser() {
    return { name: 'user', exampleData: { id: 12, login: 'ivan', role_id: 2 } }
  }
}
