import { BaseDB } from "./baseDatabase";
import { FeedGateway } from "../business/gateways/feedGateway";
import { Feed } from "../business/entities/feeds";

export class FeedDB extends BaseDB implements FeedGateway {
   private friendshipsTable = "friendships";
   private postsTable = "posts";
   private usersTable = "users";

   async getFeedforUser(userId: string): Promise<Feed[]> {
      const result = await this.connection.raw(`
         SELECT posts.* FROM ${this.friendshipsTable}
         JOIN ${this.usersTable} ON ${this.friendshipsTable}.requestedUserId = ${this.usersTable}.id
         JOIN ${this.postsTable} ON ${this.friendshipsTable}.requestedUserId = ${this.postsTable}.userId
         WHERE applyingUserId = '${userId}'
         ORDER BY ${this.postsTable}.creation_date ASC;
      `)

      return result[0].map((post: any) => {       
         return new Feed(
            post.id,
            post.description,
            post.creationDate,
            post.type,
            post.userId,
            post.picture
         )
      });
   };
}