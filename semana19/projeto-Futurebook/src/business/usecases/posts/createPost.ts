import { PostGateway } from "../../gateways/postGateway";
import { v4 } from "uuid";
import { PostType, Post } from "../../entities/posts";
import { InvalidParameterError } from "../../error/invalidParameterError";

export class CreatePostUC {
   constructor(private db: PostGateway) { }

   public async execute(input: CreatePostUCInput): Promise<CreatePostUCOutput> {
      const id = v4();
      let type = PostType.normal;
      if(input.type === "event"){
         type = PostType.event;
      } else if (input.type !== "normal") {
         throw new InvalidParameterError("Invalid type");
      }

      const post = new Post(
         id,
         input.description,
         new Date().toLocaleString(),
         type,
         input.userId,
         input.picture
      )

      await this.db.createPost(post);

      return {
         message: "Post created sucessfully"
      };
   }
}

export interface CreatePostUCInput {  
   description: string;
   type: PostType;
   userId: string;
   picture?: string;
}

export interface CreatePostUCOutput {
   message: string;
}