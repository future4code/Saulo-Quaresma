import { VideoFeed } from "../../entities/videoFeed";
import { VideoGateway } from "../../gateways/video/videoGateway";
import { AuthenticationGateway } from "../../gateways/AuthGateway";

export class GetUserVideosUC {
   constructor(
      private db: VideoGateway,
      private authenticationGateway: AuthenticationGateway
   ) { }

   public async execute(input: GetUserVideosUCInput): Promise<GetUserVideosUCOutPut> {
      const userInfo = await this.authenticationGateway.getUsersInfoFromToken(
         input.token
      );

      let videos: VideoFeed[] | undefined;

      if (!userInfo) {
         throw new Error("User Not Found");
      }

      if (input.userId) {
         videos = await this.db.getUserVideos(input.userId);
      } else if (!input.userId) {
         videos = await this.db.getUserVideos(userInfo.id);
      }

      if (!videos) {
         throw new Error("Feed is empty");
      }

      return {
         videos: videos.map((video) => {
            return {
               id: video.getId(),
               title: video.getTitle(),
               description: video.getDescription(),
               url: video.getUrl(),
               userId: video.getUserId(),
            };
         }),
      };
   }
}

export interface GetUserVideosUCInput {
   userId: string;
   token: string;
}

export interface GetUserVideosUCOutPut {
   videos: GetUserVideosUCOutPutArray[];
}

export interface GetUserVideosUCOutPutArray {
   id: string;
   title: string;
   description: string;
   url: string;
   userId: string;
}