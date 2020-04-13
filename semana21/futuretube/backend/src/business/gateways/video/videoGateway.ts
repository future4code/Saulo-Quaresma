import { Video } from "../../entities/videos";

export interface VideoGateway {
   createVideo(video: Video): Promise<void>;
   verifyVideoPosted(url: string): Promise<Video | undefined>;
}