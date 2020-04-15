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
            input.birthDate,
            input.picture,
            input.password
         )
      )
   };

   public async signUp(user: User): Promise<void> {
      await this.connection.raw(`
         INSERT INTO ${this.userTableName} (id, name, email, birthDate, picture, password)
         VALUE (
            '${user.getId()}',
            '${user.getName()}',
            '${user.getEmail()}',
            '${user.getBirthDate()}',
            '${user.getPicture()}',
            '${user.getPassword()}'
         )
      `);
   }

   public async getUserByEmail(email: string): Promise<User | undefined> {
      const user = await this.connection.raw(`
         SELECT * FROM ${this.userTableName} WHERE email='${email}'
      `);

      if (!user[0][0]) {
         return undefined
      }

      return this.mapDBUserToUser(user[0][0])
   };

   public async login(email: string): Promise<User | undefined> {
      const user = await this.connection.raw(`
        SELECT * FROM ${this.userTableName} 
        WHERE email = '${email}'
      `);

      if (!user[0]) {
         return undefined;
      }

      return new User(
         user[0].id,
         user[0].name,
         user[0].email,
         user[0].birthDate,
         user[0].picture,
         user[0].password
      );
   }

   public async changePassword(id: string, newPassword: string): Promise<void> {
      await this.connection.raw(`
        UPDATE ${this.userTableName}
        SET password = '${newPassword}'
        WHERE id = '${id}'
      `);
   }

   public async getUserById(id: string): Promise<User | undefined> {
      const result = await this.connection.raw(`
        SELECT * FROM ${this.userTableName} 
        WHERE id = '${id}'
      `);

      if (!result[0][0]) {
         return undefined;
      }

      return new User(
         result[0][0].id,
         result[0][0].name,
         result[0][0].email,
         result[0][0].birthDate,
         result[0][0].picture,
         result[0][0].password
      );
   }
}