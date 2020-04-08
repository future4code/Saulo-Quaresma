import { BaseDB } from "./baseDatabase";
import { UserGateway } from "../business/gateways/userGateway";
import { User } from "../business/entities/users";

export class UserDB extends BaseDB implements UserGateway {
   private usersTable = "users";
   private friendshipTable = "friendships";

   private mapDBUserToUser(input?: any): User | undefined {
      return (
         input && new User(
            input.id,
            input.name,
            input.email,
            input.password
         )
      )
   };

   public async createUser(user: User): Promise<void> {
      await this.connection.raw(`
         INSERT INTO ${this.usersTable} (id, name, email, password) VALUES (
            '${user.getId()}',
            '${user.getName()}',
            '${user.getEmail()}',
            '${user.getPassword()}'
         );
      `)
   };

   public async getUserByEmail(email: string): Promise<User | undefined> {
      const user = await this.connection.raw(`
         SELECT * FROM ${this.usersTable} WHERE email='${email}';
      `);

      if (!user[0][0]) {
         return undefined
      }

      return this.mapDBUserToUser(user[0][0])
   };

   public async createFriendship(applyingUserId: string, requestedUserId: string): Promise<void> {
      await this.connection.raw(`
         INSERT INTO ${this.friendshipTable} (applyingUserId, requestedUserId)
         VALUES ('${applyingUserId}', '${requestedUserId}')
      `)
   };

   public async deleteFriendship(applyingUserId: string, requestedUserId: string): Promise<void> {
      await this.connection.raw(`
         DELETE FROM ${this.friendshipTable}
         WHERE applyingUserId = '${applyingUserId}' AND requestedUserId = '${requestedUserId}'
      `)

      await this.connection.raw(`
         DELETE FROM ${this.friendshipTable}
         WHERE applyingUserId = '${requestedUserId}' AND requestedUserId = '${applyingUserId}'
      `)
   };
}