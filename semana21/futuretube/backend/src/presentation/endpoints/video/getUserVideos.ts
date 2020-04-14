import { Request, Response } from "express";
import { VideoDB } from "../../../data/videoDatabase";
import { GetUserVideosUC } from "../../../business/usecases/videos/getUserVideos";
import { JwtAuthorizer } from "../../../services/jwtAuthorizes";

export const getUserVideosEndPoint = async (req: Request, res: Response) => {
   try {
      const jwtAuth = new JwtAuthorizer();
      const getUserVideoUC = new GetUserVideosUC(new VideoDB(), jwtAuth);

      const result = await getUserVideoUC.execute({
         userId: req.query.userId as string || "",
         token: req.headers.auth as string,
      });
      res.status(200).send(result);
   } catch (err) {
      res.status(err.errorCode || 400).send({
         message: err.message
      });
   }
};