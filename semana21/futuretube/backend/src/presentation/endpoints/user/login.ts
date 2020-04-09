import { Request, Response } from 'express';
import { LoginUC } from '../../../business/usecases/login';
import { UserDB } from '../../../data/userDatabase';

export const loginEndpoint = async (req: Request, res: Response) => {
   try {
      const loginUC = new LoginUC(new UserDB());
      const token = await loginUC.execute({
         email: req.body.email,
         password: req.body.password
      })

      res.status(200).send(token)
   } catch (err) {
      res.status(err.errorCode || 400).send({
         message: err.message
      })
   };
}