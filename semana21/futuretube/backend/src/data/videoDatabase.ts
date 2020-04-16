import { BaseDatabase } from "./baseDatabase";
import { VideoGateway } from "../business/gateways/video/videoGateway";
import { Video } from "../business/entities/videos";
import { VideoFeed } from "../business/entities/videoFeed";

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
            video.userId
         )
      );
   }

   public async createVideo(video: Video): Promise<void> {
      await this.connection.raw(`
         INSERT INTO ${this.videosTableName} (id, title, description, url, userId)
         VALUE (
            '${video.getId()}',
            '${video.getTitle()}',
            '${video.getDescription()}',
            '${video.getUrl()}',
            '${video.getUserId()}'
         )
      `)
   };

   public async verifyVideoByUrl(url: string): Promise<Video | undefined> {
      const result = await this.connection.raw(`
         SELECT * FROM ${this.videosTableName} 
         WHERE url = '${url}'
      `)

      if (!result[0][0]) {
         return undefined
      }

      return await this.mapVideoToVideo(result[0][0])
   };

   public async getAllVideos(limit: number, offset: number): Promise<VideoFeed[]> {
      const response = await this.connection.raw(`
         SELECT ${this.videosTableName}.*, ${this.usersTableName}.*
         FROM ${this.videosTableName}
         JOIN ${this.usersTableName}
         ON ${this.videosTableName}.userId = ${this.usersTableName}.id
         LIMIT ${limit} OFFSET ${offset};
      `)

      return response[0].map((video: any) => {
         return new VideoFeed(
            video.id,
            video.title,
            video.description,
            video.url,
            video.userId,
            video.name,
            video.picture
         );
      })
   };

   public async getUserVideos(userId: string): Promise<VideoFeed[] | undefined> {
      const response = await this.connection.raw(`
         SELECT ${this.videosTableName}.*, ${this.usersTableName}.*
         FROM ${this.videosTableName}
         JOIN ${this.usersTableName}
         ON ${this.videosTableName}.userId = ${this.usersTableName}.id
         WHERE ${this.videosTableName}.userId = "${userId}";
      `);

      if (!response[0]) {
         return undefined;
      }

      return response[0].map((video: any) => {
         return new VideoFeed(
            video.id,
            video.title,
            video.description,
            video.url,
            video.userId,
            video.name,
            video.picture
         );
      })
   };

   public async deleteVideo(id: string): Promise<void> {
      await this.connection.raw(`
         DELETE FROM ${this.videosTableName}
         WHERE id = '${id}'
      `)
   };

   public async changeVideosInfos(id: string, newDescription: string, newTitle: string): Promise<void> {
      await this.connection.raw(`
         UPDATE ${this.videosTableName}
         SET description = '${newDescription}', title = '${newTitle}'
         WHERE id = '${id}';
      `)
   };

   public async getVideoById(id: string): Promise<Video | undefined> {
      const result = await this.connection.raw(`
         SELECT * FROM ${this.videosTableName}
         WHERE id = '${id}'
      `)

      if (!result[0][0]) {
         return undefined;
      }

      return new Video(
         result[0][0].id,
         result[0][0].title,
         result[0][0].description,
         result[0][0].url,
         result[0][0].userId
      )
   };

   public async getAllVideoInfos(id: string): Promise<VideoFeed> {
      const result = await this.connection.raw(`
         SELECT ${this.videosTableName}.*, ${this.usersTableName}.name, ${this.usersTableName}.picture 
         FROM ${this.videosTableName}
         JOIN ${this.usersTableName}
         ON ${this.videosTableName}.userId = ${this.usersTableName}.id
         WHERE id = '${id}'
      `)

      return new VideoFeed(
         result[0][0].id,
         result[0][0].title,
         result[0][0].description,
         result[0][0].url,
         result[0][0].userId,
         result[0][0].name,
         result[0][0].picture
      )
   };
}
