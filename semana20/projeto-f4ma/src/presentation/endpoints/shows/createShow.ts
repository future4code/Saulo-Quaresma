import { Request, Response } from "express";
import { CreateShowUC } from "../../../business/usecase/shows/createShow";
import { ShowDatabase } from "../../../data/showDatabase";

export const createShowEndpoint = async (req: Request, res: Response) => {
   try {
      const createShowUC = new CreateShowUC(new ShowDatabase());

      const result = await createShowUC.execute({
         weekDay: req.body.weekDay,
         startTime: req.body.startTime,
         endTime: req.body.endTime,
         bandId: req.body.bandId
      })

      res.status(200).send({ result })

   } catch (err) {
      res.status(err.errorCode || 400).send({
         message: err.message
      })
   }
}