import { Request, Response } from "express";
import { VideoDB } from "../../../data/videoDatabase";
import { GetAllVideoInfosUC } from "../../../business/usecases/videos/getAllVideoInfos";

export const getAllVideoInfosEndpoint = async (req: Request, res: Response) => {
   try {
      const getAllVideoInfosUC = new GetAllVideoInfosUC(new VideoDB())
      const result = await getAllVideoInfosUC.execute({
         id: req.query.id as string
      })
      res.status(200).send(result)
   } catch (err) {
      res.status(err.errCode || 400).send({
         message: err.message,
      });
   }
}