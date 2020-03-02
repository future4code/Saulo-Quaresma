import { Commerce } from "./commerce";
import { Client } from "./client";

export class CommercialClient extends Commerce implements Client {
   constructor(
      name: string, 
      cpf: string, 
      cep: string, 
      public clientNumber: number, 
      public consumedEnergy: number, 
      public clientName: string
   ) {super(name, cpf, cep)};

   public calculateBill(): number {
      let kWh = 0.53;
      return this.consumedEnergy * kWh;  
   }
}