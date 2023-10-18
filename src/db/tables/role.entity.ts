export class Role {
  id: number
  name: string
  code: string
  constructor(data) {
    Object.assign(this, data)
  }
}
