import { Post, PostType } from "./posts";

export class Feed extends Post {
   constructor(
      id: string,
      description: string,
      creationDate: string,
      type: PostType,
      userId: string,
      picture?: string
   ) {
      super(id, description, creationDate, type, userId, picture)
   }
}