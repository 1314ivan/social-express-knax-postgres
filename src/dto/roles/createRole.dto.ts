import { BadRequest } from '../../utils/errors'
export class CreateRoleDto {
  code!: string
  name!: string
  constructor(data: CreateRoleDto) {
    if (!data.code) BadRequest('Необходимо указать code')
    if (!data.name) BadRequest('Необходимо указать name')
    Object.assign(this, data)
  }
}
