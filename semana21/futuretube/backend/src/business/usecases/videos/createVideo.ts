import { VideoGateway } from "../../gateways/video/videoGateway";
import { v4 } from 'uuid';
import { Video } from "../../entities/videos";

export class CreateVideoUC {
   constructor(private videoDB: VideoGateway) { }

   public async execute(input: CreateVideoUCInput): Promise<CreateVideoUCOutput> {
      const id = v4();

      const verifyVideoExist = await this.videoDB.verifyVideoPosted(input.url);

      if (verifyVideoExist) {
         throw new Error("Cannot post the same video url.")
      };

      const video = new Video(
         id,
         input.title,
         input.description,
         input.url,
         new Date().toLocaleString(),
         input.userId
      );

      await this.videoDB.createVideo(video);

      return {
         message: "Video created sucessfully!"
      }
   }
}

interface CreateVideoUCInput {
   title: string,
   url: string,
   description: string,
   userId: string,
}

interface CreateVideoUCOutput {
   message: string
}