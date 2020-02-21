import { User } from "./User";
import { f4SystemClasses } from "./Specialty";

export class Teacher implements User {
   constructor(
      public name: string,
      public email: string,
      public birthday: string,
      public specialty: f4SystemClasses) { }
}