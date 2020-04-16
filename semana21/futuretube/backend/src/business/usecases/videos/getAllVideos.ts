import { VideoGateway } from "../../gateways/video/videoGateway";


export class GetAllVideosUC {
  constructor(private db: VideoGateway) {}

  private VIDEOS_PER_PAGE = 10;

  public async execute(input: GetAllVideosUCInput): Promise<GetAllVideosUCOutPut[]> {
    let page = input.page >= 1 ? input.page : 1;
    const offset = this.VIDEOS_PER_PAGE * (page - 1);

    const videos = await this.db.getAllVideos(
      this.VIDEOS_PER_PAGE,
      offset
    );

    return videos.map((video) => {
      return {
        id: video.getId(),
        title: video.getTitle(),
        url: video.getUrl(),
      };
    });
  }
}

export interface GetAllVideosUCInput {
  page: number;
}

export interface GetAllVideosUCOutPut {
  id: string;
  title: string;
  url: string;
}