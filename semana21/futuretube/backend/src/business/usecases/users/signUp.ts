import { v4 } from "uuid";
import { CryptographyGateway } from "../../gateways/cryptographyGateway";
import { UserGateway } from "../../gateways/user/userGateway";
import { AuthenticationGateway } from "../../gateways/AuthGateway";
import { User } from "../../entities/users";

export class SignUpUC {
   constructor(
      private db: UserGateway,
      private authenticationGateway: AuthenticationGateway,
      private cryptographyGateway: CryptographyGateway
   ) { }

   public async execute(input: SignUpUCInput): Promise<SignUpUCOutput> {
      const id = v4();

      if (!input.name || input.name.length < 1) {
         throw new Error("Input name is missing!");
      }
      if (!input.email || input.email.length < 1) {
         throw new Error("Input email is missing!");
      }
      if (!input.birthDate || input.birthDate.length < 1) {
         throw new Error("Input birthDate is missing!");
      }
      if (!input.picture || input.picture.length < 1) {
         throw new Error("Input picture is missing!");
      }

      const pass = await this.cryptographyGateway.encrypt(input.password);
      const invalidPassword = pass.length < 6;

      if (!pass || invalidPassword) {
         throw new Error("Password does not exist or is not valid");
      }

      const user = new User(id, input.name, input.email, input.birthDate, input.picture, pass);
      await this.db.signUp(user);

      const token = this.authenticationGateway.generateToken({
         id: user.getId(),
      });

      return {
         token,
      };
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
   token: string
}