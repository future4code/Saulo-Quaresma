import { Post } from "./post";
import { FileManager } from "./fileManager";

const posts: Post[] = []

const user = new FileManager("./posts.json")

const newPost1 = new Post("Saulo", "Meu texto", new Date())

user.writeFile(newPost1)
const info = user.readFile()
console.log(info)

posts.push(newPost1)
console.log(posts)