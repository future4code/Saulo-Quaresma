import { CryptographyGateway } from "../../gateways/cryptographyGateway";
import { UserGateway } from "../../gateways/user/userGateway";
import { AuthenticationGateway } from "../../gateways/AuthGateway";

export class ChangePasswordUC {
   constructor(
      private db: UserGateway,
      private authenticationGateway: AuthenticationGateway,
      private cryptographyGateway: CryptographyGateway
   ) { }

   public async execute(input: ChangePasswordUCInput): Promise<ChangePasswordUCOutput> {
      if (!input.token) {
         throw new Error("Missing authorization token");
      }

      const userInfo = this.authenticationGateway.getUsersInfoFromToken(
         input.token
      );

      const id = userInfo.id;

      const user = await this.db.getUserById(id);

      if (!user) {
         throw new Error("User not found");
      }

      const isPasswordCorrect = await this.cryptographyGateway.compare(
         input.oldPassword,
         user.getPassword()
      );

      if (!isPasswordCorrect) {
         throw new Error("Incorret information");
      }

      const pass = await this.cryptographyGateway.encrypt(input.newPassword);
      
      await this.db.changePassword(user.getId(), pass);

      const token = this.authenticationGateway.generateToken({
         id: user.getId(),
      });

      return {
         message: "Password changed sucessfully!",
         token
      };
   }
}

interface ChangePasswordUCInput {
   token: string,
   oldPassword: string,
   newPassword: string
}

interface ChangePasswordUCOutput {
   message: string,
   token: string
}