import { Teacher } from './Teacher';
import { Student } from './Student';

export abstract class Mission {
   constructor(
      protected initialDate: Date,
      protected finishedDate: Date,
      protected teachersList: Teacher[] = [],
      protected studentList: Student[],
   ){}
}