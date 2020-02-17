export class Transaction {
   private cpf: string;
   private value: number;
   private description: string;

   public getTransaction() {
      return {
         cdf: this.cpf,
         value: this.value,
         description: this.description
      };
   };
};