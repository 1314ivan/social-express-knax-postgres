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
  static swaggerSession() {
    return {
      name: 'sessions',
      exampleData: Object.assign(this.swaggerDefaultKeys().exampleData, {
        // todo data
        data: {},
        user_id: 21,
        session_id: 'UkJR18TLAiJKE_N9KB5uz'
      })
    }
  }
}
