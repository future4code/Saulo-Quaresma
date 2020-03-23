import { User } from "../entities/users";

export interface UserGateway {
   createUser(user: User): Promise<void>
}