
import { User, UserData } from './user.entity'

export class getAll{
    static swaggergetAll() {
        const exampleData: UserData = {
            id: 1,
            login: "user",
            password: "pa$$w0rd",
            role_id: 1,
        };
        return { name: 'users', exampleData: new User(exampleData) }
    }
}