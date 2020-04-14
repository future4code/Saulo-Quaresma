import { VideoGateway } from "../../gateways/video/videoGateway";
import { AuthenticationGateway } from "../../gateways/AuthGateway";

export class ChangeVideosInfosUC {
   constructor(
      private db: VideoGateway,
      private authenticationGateway: AuthenticationGateway
   ) { }

   public async execute(input: ChangeVideosInfosUCInput): Promise<ChangeVideosInfosUCOutput> {
      const userInfo = await this.authenticationGateway.getUsersInfoFromToken(
         input.token
      );

      if (!userInfo) {
         throw new Error("User Not Found");
      }

      if (!input.newDescription || !input.newTitle) {
         throw new Error("You must fill in at least one field");
      }

      const video = await this.db.getVideoById(input.id);

      if (!video) {
         throw new Error("Video not found");
      }

      await this.db.changeVideosInfos(
         video.getId(),
         input.newDescription,
         input.newTitle
      );

      return {
         message: "Video title and description changed sucessfuly!"
      }
   }
}

interface ChangeVideosInfosUCInput {
   token: string
   id: string;
   newDescription: string;
   newTitle: string;
}

interface ChangeVideosInfosUCOutput {
   message: string
}