import { VideoGateway } from "../../gateways/video/videoGateway";

export class GetAllVideoInfosUC {
   constructor(private db: VideoGateway) { }

   public async execute(input: GetAllVideoInfosUCInput): Promise<GetAllVideoInfosUCOutput> {
      const video = await this.db.getAllVideoInfos(input.id);

      if (!video) {
         throw new Error("Video not found");
      }

      return {
         title: video.getTitle(),
         description: video.getDescription(),
         url: video.getUrl(),
         name: video.getName(),
         picture: video.getPicture(),
      };
   }
}

export interface GetAllVideoInfosUCInput {
   id: string;
}

export interface GetAllVideoInfosUCOutput {
   title: string;
   description: string;
   url: string;
   name: string;
   picture: string;
}