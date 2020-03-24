import { Request, Response } from "express";
import { UserDB } from "../../data/userDatabase";
import * as jwt from "jsonwebtoken";
import { DeleteFriendshipUC } from "../../business/usecases/users/deleteFriendship";

export const deleteFriendshipEndpoint = async (req: Request, res: Response) => {
   try {
      const jwtSecretKey: string = process.env.SECRET || "";
      const deletefriendshipUC = new DeleteFriendshipUC(new UserDB());
      const data = jwt.verify(req.headers.auth as string, jwtSecretKey) as {id: string}      
      
      await deletefriendshipUC.execute({
         applyingUserId: data.id,
         requestedUserId: req.body.requestedUserId
      })

      res.status(200).send({message: "Friendship deleted sucessfully"})
   } catch(err) {
      res.status(err.errorCode || 400).send({
         message: err.message
      })
   }
};