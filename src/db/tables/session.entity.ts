import { IUserSession } from "src/interface/userSesion.dto";
import { DefaultKeys } from "../defaultKeys";

export class Session extends DefaultKeys {
  constructor(data: Session){
    super()
    Object.assign(this, data)
  }
  data!: IUserSession
  user_id!: number
  session_id!: string
}