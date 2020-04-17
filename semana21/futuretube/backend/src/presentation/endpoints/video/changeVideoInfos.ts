import { Request, Response } from "express";
import { ChangeVideosInfosUC } from "../../../business/usecases/videos/changeVideosInfo";
import { VideoDB } from "../../../data/videoDatabase";
import { JwtAuthorizer } from "../../../services/jwtAuthorizes";

export const changeVideoInfosEndPoint = async (req: Request, res: Response) => {
   try {
      const changeVideoInfoUC = new ChangeVideosInfosUC(new VideoDB(), new JwtAuthorizer());

      const result = await changeVideoInfoUC.execute({
         token: req.headers.auth as string,
         id: req.body.id,
         newDescription: req.body.newDescription,
         newTitle: req.body.newTitle
      })

      res.status(200).send(result)

   } catch (err) {
      res.status(err.errorCode || 400).send({
         message: err.message
      });
   }
}