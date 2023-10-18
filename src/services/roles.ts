import db from '../db/config'
import { CreateRoleDto } from '../dto/roles/createRole'

class RolesService {
  async create(dto: CreateRoleDto) {
    const [ role ] = await db('roles').insert(new CreateRoleDto(dto)).returning('*')
    return role
  }
}
export = new RolesService()
 