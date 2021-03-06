import { Industry } from "./industry";
import { Client } from "./client";

export class IndustrialClient extends Industry implements Client {
   constructor(
      name: string, 
      cpf: string, 
      cep: string, 
      public clientNumber: number, 
      public consumedEnergy: number, 
      public clientName: string
   ) {super(name, cpf, cep)};

   calculateBill(): number {
      let kWh = 0.45;
      return this.consumedEnergy * kWh + 10000;
   }
}