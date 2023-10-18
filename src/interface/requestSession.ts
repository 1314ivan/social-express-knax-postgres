import { Request as Req } from 'express'
import { IUserSession } from 'src/interface/userSesion.dto'

export interface IRequestSession extends Req {
  user: IUserSession
  sessionId: string
}
