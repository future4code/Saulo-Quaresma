import { BaseDB } from "./baseDatabase";
import { UserGateway } from "../business/gateways/userGateway";
import { User } from "../business/entities/users";

export class UserDB extends BaseDB implements UserGateway {
   private userTable = "users";

   public async createUser(user: User): Promise<void> {
      await this.connection.raw(`
         INSERT INTO ${this.userTable} (id, name, email, password) VALUES (
            '${user.getId()}',
            '${user.getName()}',
            '${user.getEmail()}',
            '${user.getPassword()}'
         )
      `)
   };
}