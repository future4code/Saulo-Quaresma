import { VideoGateway } from "../../gateways/video/videoGateway";
import { AuthenticationGateway } from "../../gateways/AuthGateway";

export class DeleteVideoUC {
   constructor(
      private db: VideoGateway,
      private authenticationGateway: AuthenticationGateway
   ) { }

   async execute(input: DeleteVideoUCInput): Promise<DeleteVideoUCOutput> {
      const userInfo = await this.authenticationGateway.getUsersInfoFromToken(
         input.token
      );

      if (!userInfo) {
         throw new Error("User Not Found");
      }

      await this.db.deleteVideo(input.id)

      return {
         message: "Video deleted sucessfully!"
      }
   }
}

interface DeleteVideoUCInput {
   id: string;
   token: string;
}

interface DeleteVideoUCOutput {
   message: string
}