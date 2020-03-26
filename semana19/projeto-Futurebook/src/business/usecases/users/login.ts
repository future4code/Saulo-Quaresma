import { UserGateway } from "../../gateways/userGateway";
import * as bcrypt from 'bcrypt';
import * as jwt from 'jsonwebtoken';

export class LoginUC {
   constructor(private db: UserGateway) { }

   public async execute(input: LoginUCInput): Promise<LoginUCOutput> {
      const user = await this.db.getUserByEmail(input.email);
      const jwtSecretKey: string = process.env.SECRET || "";

      if (!user) {
         throw new Error("Incorrect email.")
      }

      const passwordVerify = await bcrypt.compare(input.password, user.getPassword());

      if (!passwordVerify) {
         throw new Error("Incorrect password.")
      }

      const jwtToken = jwt.sign({ id: user.getId(), email: user.getEmail(), password: user.getPassword() }, jwtSecretKey, {
         expiresIn: "1h"
      })

      return {
         message: "User logged sucessfully.",
         token: jwtToken
      }
   };
}

export interface LoginUCInput {
   email: string,
   password: string
}

export interface LoginUCOutput {
   message: string,
   token: string
}