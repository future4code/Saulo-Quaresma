import { User } from './User';
import { Mission } from "./Mission";

export class Student implements User {
   constructor(
      public name: string,
      public email: string,
      public birthday: string,
      public team: Mission,
   ) { }
}
