import { Request, Response } from "express";
import * as jwt from "jsonwebtoken";
import { CreateVideoUC } from "../../../business/usecases/videos/createVideo";
import { VideoDB } from "../../../data/videoDatabase";
import { JwtAuthorizer } from "../../../services/jwtAuthorizes";

export const createVideoEndpoint = async (req: Request, res: Response) => {
   try {
      const jwtAuth = new JwtAuthorizer();
      const createVideoUC = new CreateVideoUC(new VideoDB());
      
      const userId = jwtAuth.getUsersInfoFromToken(req.headers.auth as string)

      const result = await createVideoUC.execute({
         title: req.body.title,
         description: req.body.description,
         url: req.body.url,
         userId: userId.id
      })

      res.status(200).send({ video: result })

   } catch (err) {
      res.status(err.errorCode || 400).send({
         message: err.message
      })
   }
}