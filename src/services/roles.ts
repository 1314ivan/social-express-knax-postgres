import { Role } from '../db/tables/role'
import db from '../db/config'
import { CreateRoleDto } from '../dto/roles/createRole'

class RolesService {
  async create(dto: CreateRoleDto) {
    const [ role ] = await db('roles').insert(new CreateRoleDto(dto)).returning('*')
    return role
  }
  async getOne(by: 'code' | 'id', value: string | number){
    const role = await db
      .select()      
      .table('roles')
      .where({ [by]: value })
      .then(data => data[0])
    return role ? new Role(role) : null
  }
}
export = new RolesService()
 