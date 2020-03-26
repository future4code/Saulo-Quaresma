import { BaseDB } from "./baseDatabase";
import { Post } from "../business/entities/posts";

export class PostDB extends BaseDB {
   private postTable = "posts";

   public async createPost(post: Post): Promise<void> {
      await this.connection.raw(`
         INSERT INTO ${
         this.postTable
         } (id, picture, description, creation_date, type, userId)
         VALUES(
            '${post.getId()}',
            '${post.getPicture()}',
            '${post.getDescription()}',
            '${post.getCreationDate()}',
            '${post.getType()}',
            '${post.getUserId()}'
         )      
      `);
   };
}