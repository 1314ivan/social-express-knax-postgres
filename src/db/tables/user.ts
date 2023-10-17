export = class User {
  constructor(data) {
    if (!data) return

    if (data.id) {
      this.id = data.id
    }
    this.login = data.login
    this.password = data.password
  }

  id
  login
  password

  get() {
    return { id: this.id, login: this.login }
  }
  isCorrectPassword(input) {
    return input === this.password
  }
}
