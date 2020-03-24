import { UserGateway } from "../../gateways/users/userGateway";

export class FriendshipUC {
   constructor(private userGateway: UserGateway) {}

   async execute(input: FriendshipUCInput) {
      await this.userGateway.createFriendship(
         input.applyingUserId, 
         input.requestedUserId
      )
   };
}

interface FriendshipUCInput {
   applyingUserId: string,
   requestedUserId: string
}