import { Request, Response } from "express";
import { CreatePostUC } from "../../../business/usecases/posts/createPost";
import { PostDB } from "../../../data/postDatabase";
import * as jwt from "jsonwebtoken";

export const createPostEndpoint = async (req: Request, res: Response) => {
   try {
      const createPostUC = new CreatePostUC(new PostDB());
      const jwtSecretKey: string = process.env.SECRET || "";      
      const data = jwt.verify(req.headers.auth as string, jwtSecretKey) as { id: string }

      const result = await createPostUC.execute({
         picture: req.body.picture,
         description: req.body.description,
         type: req.body.type,
         userId: data.id
      });

      res.status(200).send(result);

   } catch(err){
      res.status(err.errorCode || 400).send({
         message: err.message
      });
   }
}