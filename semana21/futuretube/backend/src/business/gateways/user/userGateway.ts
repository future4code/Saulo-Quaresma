import { User } from "../../entities/users";

export interface UserGateway {
   signUp(user: User): Promise<void>;
   getUserByEmail(input: string): Promise<User | undefined>;
   changePassword(id: string, newPassword: string): Promise<void>;
   login(email: string): Promise<User | undefined>;
   getUserById(id: string): Promise<User | undefined>;
}