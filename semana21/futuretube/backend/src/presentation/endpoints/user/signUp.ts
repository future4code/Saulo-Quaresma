import { Request, Response } from "express";
import { SignUpUC } from "../../../business/usecases/users/signUp";
import { UserDB } from "../../../data/userDatabase";
import { JwtAuthorizer } from "../../../services/jwtAuthorizes";
import { BcryptService } from "../../../services/bcryptService";

export const signUpEndpoint = async (req: Request, res: Response) => {
   try {
      const createUserUC = new SignUpUC(new UserDB(), new JwtAuthorizer(), new BcryptService());
      const result = await createUserUC.execute({
         name: req.body.name,
         email: req.body.email,
         birthDate: req.body.birthDate,
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