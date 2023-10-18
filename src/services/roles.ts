import db from '../db/config'
import { CreateRoleDto } from '../dto/roles/createRole'

class RolesService {
  async create(dto: CreateRoleDto) {
    const [{ id }] = await db('role').insert(new CreateRoleDto(dto)).returning('id')
    return id
  }
}
export = new RolesService()
 