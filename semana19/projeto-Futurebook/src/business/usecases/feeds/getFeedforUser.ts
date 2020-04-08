import { FeedGateway } from "../../gateways/feedGateway";
import { PostType } from "../../entities/posts";

export class GetFeedForUserUC {
   constructor(private db: FeedGateway) {}

   async execute(input: GetFeedInput): Promise<GetFeedOutput[]> {
      const feeds = await this.db.getFeedforUser(input.userId);
      
      return feeds.map(feed => {
         return {
            id: feed.getId(),
            description: feed.getDescription(),
            creationDate: feed.getCreationDate(),
            type: feed.getType(),
            userId: feed.getUserId(),
            picture: feed.getPicture()
         }
      });
   };
}

interface GetFeedInput {
   userId: string
}

interface GetFeedOutput {
   id: string,
   description: string,
   creationDate: string,
   type: PostType,
   userId: string,
   picture?: string
}
