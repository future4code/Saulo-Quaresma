import { UserGateway } from "../../gateways/user/userGateway";
import * as bcrypt from 'bcrypt';
import * as jwt from 'jsonwebtoken';

export class LoginUC {
   constructor(private db: UserGateway) { }

   async execute(input: LoginUCInput): Promise<LoginUCOutput> {
      const user = await this.db.getUserByEmail(input.email);
      const jwtSecretKey: string = process.env.JWT_SECRET || "";

      if (!user) {
         throw new Error("Incorrect email!");
      }

      const passwordVerify = await bcrypt.compare(input.password, user.getPassword());

      if (!passwordVerify) {
         throw new Error("incorrect password!");
      }

      const jwtToken = jwt.sign({
         id: user.getId(),
         email: user.getEmail(),
         password: user.getPassword()
      },
         jwtSecretKey, {
         expiresIn: "1h"
      }
      )

      return {
         message: "User logged sucessfully!",
         token: jwtToken
      }
   };
}

interface LoginUCInput {
   email: string,
   password: string
}

interface LoginUCOutput {
   message: string,
   token: string
}