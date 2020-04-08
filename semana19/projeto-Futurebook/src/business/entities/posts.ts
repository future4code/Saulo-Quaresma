import { User } from "./users";

export class Post {
   constructor(
      private id: string,
      private description: string,
      private creationDate: string,
      private type: PostType,
      private userId: string,
      private picture?: string
   ) { }

   public getId(): string {
      return this.id;
   }

   public setId(id: string): void {
      this.id = id;
   }

   public getPicture(): string | undefined {
      return this.picture;
   }

   public setPicture(picture: string): void {
      this.picture = picture;
   }

   public getDescription(): string {
      return this.description;
   }

   public setDescription(description: string): void {
      this.description = description;
   }

   public getCreationDate(): string {
      return this.creationDate;
   }

   public setCreationDate(creationDate: string): void {
      this.creationDate = creationDate;
   }

   public getType(): PostType {
      return this.type;
   }

   public setType(type: PostType): void {
      this.type = type;
   }

   public getUserId(): string {
      return this.userId;
   }

   public setUserId(userId: string): void {
      this.userId = userId;
   }
}

export enum PostType {
   normal = "normal",
   event = "event"
}
