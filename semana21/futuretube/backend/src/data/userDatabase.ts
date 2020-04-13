import { User } from "../business/entities/users";
import { UserGateway } from "../business/gateways/user/userGateway";
import { BaseDatabase } from "./baseDatabase";

export class UserDB extends BaseDatabase implements UserGateway {
   private userTableName = "users";

   private mapDBUserToUser(input?: any): User | undefined {
      return (
         input && new User(
            input.id,
            input.name,
            input.email,
            input.birthDay,
            input.picture,
            input.password
         )
      )
   };

   public async createUser(user: User): Promise<void> {
      await this.connection.raw(`
         INSERT INTO ${this.userTableName} (id, name, email, birthDay, picture, password)
         VALUE (
            '${user.getId()}',
            '${user.getName()}',
            '${user.getEmail()}',
            STR_TO_DATE('${user.getBirthDay()}', '%Y-%m-%d'),
            '${user.getPicture()}',
            '${user.getPassword()}'
         )
      `);
   }

   public async getUserByEmail(email: string): Promise<User | undefined> {
      const user = await this.connection.raw(`
         SELECT * FROM ${this.userTableName} WHERE email='${email}'
      `);

      if(!user[0][0]) {
         return undefined
      }

      return this.mapDBUserToUser(user[0][0])
   };
}