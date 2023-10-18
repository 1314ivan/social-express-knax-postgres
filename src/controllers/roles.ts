import { CreateRoleDto } from '../dto/roles/createRole'
import roleService from '../services/roles'

export class RolesController {
  static async create(req, res) {
    try {
      const dto = new CreateRoleDto(req.body)
      const newRole = await roleService.create(dto)
      res.send(newRole).status(200)
    } catch (err) {
      res.send(err.message).status(401)
    }
  }
}
