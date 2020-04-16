import { Request, Response } from "express";
import { ChangePasswordUC } from "../../../business/usecases/users/changePassword";
import { UserDB } from "../../../data/userDatabase";
import { JwtAuthorizer } from "../../../services/jwtAuthorizes";
import { BcryptService } from "../../../services/bcryptService";

export const changePasswordEndpoint = async (req: Request, res: Response) => {
   try {
      const changePasswordUC = new ChangePasswordUC(new UserDB(), new JwtAuthorizer(), new BcryptService());

      const result = await changePasswordUC.execute({
         token: req.headers.auth as string,
         oldPassword: req.body.oldPassword,
         newPassword: req.body.newPassword,
      });

      res.status(200).send(result);
   } catch (err) {
      res.status(err.errorCode || 400).send({
         message: err.message
      })
   };
};