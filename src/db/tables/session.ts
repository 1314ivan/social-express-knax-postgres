import { DefaultKeys } from "../defaultKeys";

export class Session extends DefaultKeys {
  constructor(data){
    super()
    Object.assign(this, data)
  }
  data: JSON
  user_id: number
  session_id: string
}