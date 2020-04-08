import { Request, Response } from "express";
import { FriendshipUC } from "../../../business/usecases/users/resquestFriendship";
import { UserDB } from "../../../data/userDatabase";
import * as jwt from "jsonwebtoken";

export const requestFriendshipEndpoint = async (req: Request, res: Response) => {
   try {
      const jwtSecretKey: string = process.env.SECRET || "";
      const friendshipUC = new FriendshipUC(new UserDB());
      const data = jwt.verify(req.headers.auth as string, jwtSecretKey) as {id: string}
      
      console.log(data)

      await friendshipUC.execute({
         applyingUserId: data.id,
         requestedUserId: req.body.requestedUserId
      })

      res.status(200).send({message: "Friendship made sucessfully"})
   } catch(err) {
      res.status(err.errorCode || 400).send({
         message: err.message
      })
   }
};