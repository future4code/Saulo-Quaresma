import { User } from "../entities/users";

export interface UserGateway {
   createUser(user: User): Promise<void>
   getUserByEmail(input: string): Promise<User | undefined>
   createFriendship(applyingUserId: string, requestedUserId: string): Promise<void>
   deleteFriendship(applyingUserId: string, requestedUserId: string): Promise<void>
}