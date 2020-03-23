import { UserGateway } from "../gateways/userGateway";
import { v4 } from "uuid";
import * as bcrypt from 'bcrypt';
import * as jwt from 'jsonwebtoken';
import { User } from "../entities/users";

export class SignUpUC {
   constructor(private db: UserGateway) { }

   public async execute(input: SignUpUCInput): Promise<SignUpUCOutput> {
      try {
         const jwtSecretKey: string = process.env.SECRET || "";
         const userId = v4();
         const hashPassword = await bcrypt.hash(input.password, 15);
         const newUser = new User(userId, input.name, input.email, hashPassword);
         const jwtToken = jwt.sign({
            name: input.name, 
            email: input.email, 
            password: input.password}, 
            jwtSecretKey, {
               expiresIn: "1h"
            }
         );

         await this.db.createUser(newUser);
         return {
            message: "User created successfully.",
            token: jwtToken
         }
      } catch (err) {
         throw new Error(err.message)
      }
   }
}

export interface SignUpUCInput {
   name: string,
   email: string,
   password: string
}

export interface SignUpUCOutput {
   message: string
   token: string
}