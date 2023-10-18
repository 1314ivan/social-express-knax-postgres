export class User {
  constructor(data) {
    Object.assign(this, data)
    // if (!data) return
    // if (data.id) {
    //   this.id = data.id
    // }
    // this.login = data.login
    // this.password = data.password
    // this.role_id = data.role_id
  }

  id : number         
  login: string
  private password : string
  role_id:number

  get() {
    return { id: this.id, login: this.login, role_id: this.role_id }
  }
  isCorrectPassword(input) {
    return input === this.password
  }
}
