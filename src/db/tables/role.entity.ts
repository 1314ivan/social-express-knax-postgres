export class Role {
  id!: number
  name!: string
  code!: string
  constructor(data: Role) {
    Object.assign(this, data)
  }
}
