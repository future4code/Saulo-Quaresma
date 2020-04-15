import { UserGateway } from "../../gateways/user/userGateway";
import { User } from "../../entities/users";
import * as jwt from 'jsonwebtoken';
import * as bcrypt from 'bcrypt';
import { v4 } from 'uuid';

export class SignUpUC {
   constructor(private db: UserGateway) { }

   async execute(input: SignUpUCInput): Promise<SignUpUCOutput> {
      const id = v4();
      const jwtSecretKey: string = process.env.JWT_SECRET || "";
      const hashPassword = await bcrypt.hash(input.password, 10);
      const newUser = new User(id, input.name, input.email, input.birthDate, input.picture, hashPassword);
      const jwtToken = jwt.sign({
         id,
         name: input.name,
         email: input.email,
         password: input.password
      },
         jwtSecretKey, {
         expiresIn: "1h"
      });

      await this.db.signUp(newUser);

      return {
         message: "User created sucessfully!",
         token: jwtToken
      }
   }
}

interface SignUpUCInput {
   name: string,
   email: string,
   birthDate: string,
   picture: string,
   password: string
}

interface SignUpUCOutput {
   message: string,
   token: string
}