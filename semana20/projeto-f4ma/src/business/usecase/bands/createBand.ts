import { BandGateway } from "../../gateways/bandGateway";
import { v4 } from "uuid";
import { Band } from "../../entities/band";

export class CreateBandUC {
   constructor(private db: BandGateway) { }

   async execute(input: CreateBandUCInput): Promise<CreateBandUCOutput> {
      const bandId = this.generateBandId();
      const newBand = new Band(
         bandId,
         input.name,
         input.musicGenre,
         input.responsible);

      await this.db.createBand(newBand)

      return {
         message: "Band created successfully!"
      }
   };

   private generateBandId() {
      return v4()
   };
}

interface CreateBandUCInput {
   name: string,
   musicGenre: string,
   responsible: string
}

interface CreateBandUCOutput {
   message: string
}