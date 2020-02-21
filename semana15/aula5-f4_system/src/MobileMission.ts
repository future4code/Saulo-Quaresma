import * as moment from 'moment';
import { Mission } from "./Mission";
import { Teacher } from "./Teacher";
import { Student } from "./Student";


export class MobileMission extends Mission {
   protected classNumber: string;

   constructor(
      initialDate: Date, 
      finishedDate: Date, 
      teacherList: Teacher, 
      studentList: Student, 
      classNumber: string) 
   {
      super(initialDate, finishedDate, teacherList, studentList);
      this.classNumber = classNumber
   }

}