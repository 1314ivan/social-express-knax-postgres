export class CreateRoleDto {
  code: string
  name: string
  constructor(data) {
    Object.assign(this, data)
  }
}
