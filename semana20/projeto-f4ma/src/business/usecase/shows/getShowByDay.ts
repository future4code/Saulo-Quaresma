import { ShowWeekDay } from "../../entities/show";
import { ShowDatabase } from "../../../data/showDatabase";

export class GetShowsByDayUC {
   constructor(private showDB: ShowDatabase) { }

   async execute(input: GetShowsByDayUCInput): Promise<GetShowsByDayUCOutput> {
      const show = await this.showDB.getShowsByDay(input.weekDay);

      if(!show) {
         throw new Error("Shows not found!")
      };

      return {
         shows: show.map(show => {
            return {
               id: show.getId(),
               weekDay: show.getWeekDate(),
               startTime: show.getStartTime(),
               endTime: show.getEndTime(),
               bandId: show.getBandId()
            }
         })
      };
   };
}

interface GetShowsByDayUCInput {
   weekDay: ShowWeekDay
};

interface GetShowsByDayUCOutput{
   shows: GetShowsByDayUCOutputArray[]
};

interface GetShowsByDayUCOutputArray {
   id: string,
   weekDay: ShowWeekDay,
   startTime: number,
   endTime: number,
   bandId: string
};