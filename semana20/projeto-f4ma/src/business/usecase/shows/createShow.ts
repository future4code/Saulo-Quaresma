import { v4 } from "uuid";
import { ShowDatabase } from "../../../data/showDatabase";
import { Show, ShowWeekDay } from "../../entities/show";

export class CreateShowUC {
   constructor(private db: ShowDatabase) { }

   async execute(input: CreateShowUCInput): Promise<CreateShowUCOutput> {
      const showId = this.generateShowId();

      const verifyTime = await this.db.getShow(input.weekDay, input.startTime, input.endTime);

      if(verifyTime) {
         throw new Error("Cannot book a show at the same time!")  
      }
         
      const newShow = new Show(
         showId,
         input.weekDay,
         input.startTime,
         input.endTime,
         input.bandId
      ); 
      
      await this.db.createShow(newShow)

      return {
         message: "Show created successfully!"
      }
   };

   private generateShowId() {
      return v4()
   };
}

interface CreateShowUCInput {
   weekDay: ShowWeekDay,
   startTime: number,
   endTime: number,
   bandId: string
}

interface CreateShowUCOutput {
   message: string
}