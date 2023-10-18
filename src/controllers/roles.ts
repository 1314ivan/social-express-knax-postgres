import { resError } from '../utils/resError'
import { CreateRoleDto } from '../dto/roles/createRole.dto'
import roleService from '../services/roles.services'
import { IRequestSession } from '../interface/requestSession'
import { Response } from 'express'
export class RolesController {
  static async create(req: IRequestSession, res: Response): Promise<void> {
    try {
      const dto = new CreateRoleDto(req.body)
      const newRole = await roleService.create(dto)
      res.status(200).send(newRole)
    } catch (err) {
      resError(res, err)
    }
  }
  static async getOne(req: IRequestSession, res: Response): Promise<void> {
    try {
      const dto = new CreateRoleDto(req.body)
      const newRole = await roleService.create(dto)
      res.status(200).send(newRole)
    } catch (err) {
      resError(res, err)
    }
  }
}
