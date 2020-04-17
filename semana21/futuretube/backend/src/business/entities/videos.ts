export class Video {
   constructor(
      private id: string,
      private title: string,
      private description: string,
      private url: string,
      private userId: string
   ) { }

   public getId(): string {
      return this.id;
   }

   public setId(id: string): void {
      this.id = id;
   }

   public getTitle(): string {
      return this.title;
   }

   public setTitle(title: string): void {
      this.title = title;
   }

   public getDescription(): string {
      return this.description;
   }

   public setDescription(description: string): void {
      this.description = description;
   }

   public getUrl(): string {
      return this.url;
   }

   public setUrl(url: string): void {
      this.url = url;
   }

   public getUserId(): string {
      return this.userId;
   }

   public setUserId(userId: string): void {
      this.userId = userId;
   };  
}