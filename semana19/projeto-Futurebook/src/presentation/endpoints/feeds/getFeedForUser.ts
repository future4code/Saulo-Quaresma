import { Request, Response } from "express";
import * as jwt from "jsonwebtoken";
import { GetFeedForUserUC } from "../../../business/usecases/feeds/getFeedforUser";
import { FeedDB } from "../../../data/feedDatabase";

export const getFeedForUserEndpoint = async (req: Request, res: Response) => {
   try {
      const getFeedForUserUC = new GetFeedForUserUC(new FeedDB());
      const jwtSecretKey: string = process.env.SECRET || "";      
      const data = jwt.verify(req.headers.auth as string, jwtSecretKey) as { id: string }

      const result = await getFeedForUserUC.execute({
         userId: data.id
      });

      res.status(200).send({ feeds: result });

   } catch (err) {
      res.status(err.errorCode || 400).send({
         message: err.message
      });
   }
};