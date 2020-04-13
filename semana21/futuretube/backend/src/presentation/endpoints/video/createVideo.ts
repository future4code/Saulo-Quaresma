import { Request, Response } from "express";
import * as jwt from "jsonwebtoken";
import { CreateVideoUC } from "../../../business/usecases/videos/createVideo";
import { VideoDB } from "../../../data/videoDatabase";

export const createVideoEndpoint = async (req: Request, res: Response) => {
   try {
      const jwtSecretKey: string = process.env.JWT_SECRET || "";
      const createVideoUC = new CreateVideoUC(new VideoDB());
      
      const data = jwt.verify(req.headers.authorization as string, jwtSecretKey) as { id: string }

      const result = await createVideoUC.execute({
         title: req.body.title,
         description: req.body.description,
         url: req.body.url,
         userId: data.id
      })

      res.status(200).send({ video: result })

   } catch (err) {
      res.status(err.errorCode || 400).send({
         message: err.message
      })
   }
}