import { Client } from "./client";

export class ClientManager {
   public clients: Client[] = []

   constructor() {
      this.clients = [];
   }

   public addClient(client: Client): void {
      this.clients.push(client)
   }

   public getClientsQuantity(): number {
      return this.clients.length      
   }

   public printClientBills() {
      this.clients.forEach((client) => {
         console.log(client.clientNumber + " - " + client.clientName + " - " + "R$" + client.calculateBill())
      })
   }

   public calculateAllIncome() {
      let sum = 0
      this.clients.forEach((client) => {
         sum += client.calculateBill()
      })
      return console.log("Total: R$", sum)
   }
}