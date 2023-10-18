import { CreateRoleDto } from '../dto/roles/createRole'
import roleService from '../services/roles'

export class RolesController {
  static async create(req, res) {
    try {
      const dto = new CreateRoleDto(req.body)
      const newRole = await roleService.create(dto)
      res.status(200).send(newRole)
    } catch (err) {
      res.status(401).send(err.message)
    }
  }
  static async getOne(req, res) {
    try {
      const dto = new CreateRoleDto(req.body)
      const newRole = await roleService.create(dto)
      res.status(200).send(newRole)
    } catch (err) {
      res.status(401).send(err.message)
    }
  }
}
