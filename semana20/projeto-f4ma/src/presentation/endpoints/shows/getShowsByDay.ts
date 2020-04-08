import { Request, Response } from "express";
import { GetShowsByDayUC } from "../../../business/usecase/shows/getShowByDay";
import { ShowDatabase } from "../../../data/showDatabase";

export const getShowsByDayEndpoint = async (req: Request, res: Response) => {
   try {
      const getShowsByDayUC = new GetShowsByDayUC( new ShowDatabase());
      const result = await getShowsByDayUC.execute({
         weekDay: req.query.weekDay
      })

      res.status(200).send({ result})

   } catch (err) {
      res.status(err.errorCode || 400).send({
         message: err.message
      })
   };
}