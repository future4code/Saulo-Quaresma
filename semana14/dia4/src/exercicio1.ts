import { readFile, writeFile, appendFile } from "fs";
import * as moment from 'moment';
import { rejects } from "assert";

moment.locale('pt-br');

const fileName: string = '../events.json';

type event = {
   name: string,
   description: string,
   beginDate: Date,
   finalDate: Date
}

type jsonType = {
   eventList: event[]
}

const getEvents = async () => {
   const contentPromise: Promise<string> = new Promise((resolve, reject) => {
      readFile(fileName, (err: Error, data: Buffer) => {
         if (err) {
            reject(err)
         }
         console.log(data)
         resolve(data.toString())
      });
   });

   const jsonContent: string = await contentPromise;
   const eventsObject: jsonType = JSON.parse(jsonContent);
   return eventsObject
};

getEvents().then((eventsObject: any) => {
   console.log(eventsObject.length)
})

// const createEvent = async () => {
//    const data: event = {
//       name: process.argv[3],
//       description: process.argv[4],
//       beginDate: new Date(moment().format("DD/MM/YYYY HH:mm")),
//       finalDate: new Date(process.argv[5])
//    };

//    const writeContentPromise: Promise<string> = new Promise((resolve, reject) => {
//       appendFile(fileName, data, () => {         
//          resolve("Dado inserido com sucesso!")
//       })
//    });

//    const writenText: string = await writeContentPromise;
//    return writenText
// }
