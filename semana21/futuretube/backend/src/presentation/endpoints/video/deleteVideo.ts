import { Request, Response } from "express";
import { JwtAuthorizer } from "../../../services/jwtAuthorizes";
import { VideoDB } from "../../../data/videoDatabase";
import { DeleteVideoUC } from "../../../business/usecases/videos/deleteVideo";

export const deleteVideoEndPoint = async (req: Request, res: Response) => {
   try {
      const uc = new DeleteVideoUC(new VideoDB(), new JwtAuthorizer());
  
      const input = {
        token: req.headers.auth as string,
        id: req.params.id,
      };
  
      const result = await uc.execute(input);
  
      res.status(200).send(result);
   } catch (err) {
      res.status(400).send({
         message: err.message,
      });
   }
};