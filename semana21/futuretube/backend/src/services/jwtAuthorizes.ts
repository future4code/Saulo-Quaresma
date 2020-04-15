import { AuthenticationGateway, UsersInfoForToken } from "../business/gateways/AuthGateway";
import * as jwt from "jsonwebtoken";

export class JwtAuthorizer implements AuthenticationGateway {
   private expiresIn = "10h";
   private jwtSecretKey = process.env.JWT_SECRET || "";

   public generateToken(input: UsersInfoForToken): string {
      const token = jwt.sign(
         {
            id: input.id,
         },
         this.jwtSecretKey,
         {
            expiresIn: this.expiresIn
         }
      );

      return token;
   }

   public getUsersInfoFromToken(token: string): UsersInfoForToken {
      const result = jwt.verify(token, this.jwtSecretKey) as UsersInfoForToken;
      return {
         id: result.id
      };
   }
}