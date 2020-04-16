import { Video } from "../../entities/videos";
import { VideoFeed } from "../../entities/videoFeed";

export interface VideoGateway {
   createVideo(video: Video): Promise<void>;
   verifyVideoByUrl(url: string): Promise<Video | undefined>;
   getUserVideos(userId: string): Promise<VideoFeed[] | undefined>;
   getVideoById(id: string): Promise<Video | undefined>;
   changeVideosInfos(id: string, newDescription: string, newTitle: string): Promise<void>;
   deleteVideo(id: string): Promise<void>;
   getAllVideos(limit: number, offset: number): Promise<VideoFeed[]>;
   getAllVideoInfos(id: string): Promise<VideoFeed>
}