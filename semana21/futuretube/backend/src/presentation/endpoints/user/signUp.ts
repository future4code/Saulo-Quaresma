import { Request, Response } from "express";
import { SignUpUC } from "../../../business/usecases/signUp";
import { UserDB } from "../../../data/userDatabase";

export const signUpEndpoint = async (req: Request, res: Response) => {
   try {
      const createUserUC = new SignUpUC(new UserDB());
      const result = await createUserUC.execute({
         name: req.body.name,
         email: req.body.email,
         birthDay: req.body.birthDay,
         picture: req.body.picture,
         password: req.body.password
      })

      res.status(200).send({ result })

   } catch (err) {
      res.status(err.errorCode || 400).send({
         message: err.message
      })
   };
}