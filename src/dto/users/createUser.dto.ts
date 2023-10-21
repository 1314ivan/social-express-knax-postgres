import {LoginDto} from '../auth/login.dto'

export class CreateUserDto extends LoginDto {
  constructor(data: LoginDto) {
    super(data)
    // TODO
  }
}
