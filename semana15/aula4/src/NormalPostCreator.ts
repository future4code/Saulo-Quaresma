import { FileManager } from "./fileManager"
import { PostCreator } from "./postCreator"
import { Post } from "./post";

export class NormalPostCreator implements PostCreator {
   public create(author: string, postText: string) {
      this.validateInput(author, postText);
      this.savePost(new Post(author, postText, new Date()));
   };

   protected savePost(post: Post) {
      const fileManager = new FileManager("./posts.json");
      const data = fileManager.readFile();
      data.posts.push(post);
      fileManager.writeFile(data)
   };

   protected validateInput(author: string, postText: string) {
      if (!author || !postText) {
         throw new Error("Deve ser informado um autor e um texto!")
      }
   };
}