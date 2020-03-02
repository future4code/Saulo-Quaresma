import * as fs from 'fs';

export class JSONFileManager {
   private fileName: string;

   constructor(fileName: string) {
      this.fileName = fileName;
   }

   writeObjectFromFile(object: object) {
      fs.writeFileSync(this.fileName, JSON.stringify(object, null, 3));
   }

   getObjectFromFile() {
      return JSON.parse(fs.readFileSync(this.fileName).toString());
   }
}