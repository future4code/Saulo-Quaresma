import { BandDatabase } from "../../../data/bandDatabase";
import { Band } from "../../entities/band";

export class GetBandInfoUC {
   constructor(private bandDB: BandDatabase) { }

   async execute(input: GetBandInfoUCInput): Promise<GetBandInfoUCOutput> {
      let band: Band | undefined;

      if (input.id) {
         band = await this.bandDB.getBandById(input.id)

      } else if (input.name) {
         band = await this.bandDB.getBandByName(input.name)
      };

      if (!band) {
         throw new Error("Band not found")
      };

      return {
         id: band.getId(),
         name: band.getName(),
         musicGenre: band.getMusicGenre(),
         responsible: band.getResponsible()
      };
   };
}

interface GetBandInfoUCInput {
   id: string,
   name: string
}

interface GetBandInfoUCOutput {
   id: string,
   name: string,
   musicGenre: string,
   responsible: string
}