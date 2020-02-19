import { Residence } from "./residence";
import { Client } from "./client";

export class ResidentialClient extends Residence implements Client {  
   constructor(
      name: string, 
      cpf: string, 
      cep: string, 
      public clientNumber: number, 
      public consumedEnergy: number, 
      public clientName: string
   ) {super(name, cpf, cep)};

   public calculateBill(): number {
      let kWh = 0.75;
      return this.consumedEnergy * kWh;
   }
}