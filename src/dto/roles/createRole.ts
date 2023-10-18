export class CreateRoleDto {
  code: string
  name: string
  constructor(data) {
    if (!data.code) throw new Error('Необходимо указать code')
    if (!data.name) throw new Error('Необходимо указать name')
    Object.assign(this, data)
  }
}
