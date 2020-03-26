import { UserGateway } from "../../gateways/userGateway";

export class DeleteFriendshipUC {
   constructor(private userGateway: UserGateway) {}

   async execute(input: DeleteFriendshipUCInput) {
      await this.userGateway.deleteFriendship(
         input.applyingUserId, 
         input.requestedUserId
      )
   };
}

interface DeleteFriendshipUCInput {
   applyingUserId: string,
   requestedUserId: string
}