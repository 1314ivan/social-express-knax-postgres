// import { Role } from '../db/tables/role'
import db from '../db/config'
// import { CreateRoleDto } from '../dto/roles/createRole'

class PermissionsService {
  // async create(dto: CreateRoleDto) {
  //   const [ role ] = await db('roles').insert(new CreateRoleDto(dto)).returning('*')
  //   return role
  // }
  async getAllByRoles(role_id: number) {
    const permissions = await db
      .select([
        `permissions.id`,
        `permissions.GET`,
        `permissions.POST`,
        `permissions.PATCH`,
        `permissions.DELETE`,
        `routers.code AS router_code`
      ])
      .table('permissions')
      .leftJoin('routers', 'permissions.router_id', 'routers.id')
      .where({ role_id })

    return permissions
  }
}
export = new PermissionsService()
