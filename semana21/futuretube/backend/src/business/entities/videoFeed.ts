import { Video } from "./videos";

export class VideoFeed extends Video {
  constructor(
    id: string,
    title: string,
    description: string,
    url: string,
    userId: string,
    private name: string,
    private picture: string
  ) {
    super(id, title, description, url, userId);
  }

  getName() {
    return this.name;
  }

  getPicture() {
    return this.picture;
  }
}