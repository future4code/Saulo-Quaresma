import { CryptographyGateway } from "../../gateways/cryptographyGateway";
import { UserGateway } from "../../gateways/user/userGateway";
import { AuthenticationGateway } from "../../gateways/AuthGateway";

export class LoginUC {
   constructor(
      private db: UserGateway,
      private authenticationGateway: AuthenticationGateway,
      private cryptographyGateway: CryptographyGateway
   ) { }

   public async execute(input: LoginUserUCInput): Promise<LoginUserUCOutput> {
      const user = await this.db.getUserByEmail(input.email);

      if (!user) {
         throw new Error("User not found");
      }

      const verifyPassword = await this.cryptographyGateway.compare(
         input.password,
         user.getPassword()
      );

      if (!verifyPassword) {
         throw new Error("Wrong Password or Email");
      }

      const token = this.authenticationGateway.generateToken({
         id: user.getId(),
      });

      return {
         token,
      };
   }
}

interface LoginUserUCInput {
   email: string;
   password: string;
}

interface LoginUserUCOutput {
   token: string;
}