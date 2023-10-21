import { IUserSession } from '../../interface/userSesion.dto'
import { DefaultKeys } from '../defaultKeys'

export class Session extends DefaultKeys {
  constructor(data: Session) {
    super(data)

    this.data = data.data
    this.user_id = data.user_id
    this.session_id = data.session_id
  }
  data!: IUserSession
  user_id!: number
  session_id!: string
}
export const SessionSwagger = {
  user_id: {
    text: 'id пользователя',
    done: true
  }
}
