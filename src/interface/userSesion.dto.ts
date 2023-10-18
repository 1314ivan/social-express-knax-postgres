import { IPermissionSessions } from "./permissionSessions"


export interface IUserSession{
  login: string
  id:number
  permissions: { [key: string]: IPermissionSessions }[]
}