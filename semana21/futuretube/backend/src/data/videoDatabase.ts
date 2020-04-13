import { BaseDatabase } from "./baseDatabase";
import { VideoGateway } from "../business/gateways/video/videoGateway";
import { Video } from "../business/entities/videos";

export class VideoDB extends BaseDatabase implements VideoGateway {
   private videosTableName = "videos";
   private usersTableName = "users";

   public mapVideoToVideo(video?: any): Video | undefined {
      return (
         video &&
         new Video(
            video.id,
            video.title,
            video.description,
            video.url,
            video.creationDate,
            video.userId
         )
      );
   }

   public async createVideo(video: Video): Promise<void> {
      await this.connection.raw(`
         INSERT INTO ${this.videosTableName} (id, title, description, url, creationDate, userId)
         VALUE (
            '${video.getId()}',
            '${video.getTitle()}',
            '${video.getDescription()}',
            '${video.getUrl()}',
            '${video.getCreationDate()}',
            '${video.getUserId()}'
         )
      `)
   };

   public async verifyVideoPosted(url: string): Promise<Video | undefined> {
      const result = await this.connection.raw(`
         SELECT * FROM ${this.videosTableName} 
         WHERE url = '${url}'
      `)

      if (!result[0][0]) {
         return undefined
      }

      return await this.mapVideoToVideo(result[0][0])
   }
}
