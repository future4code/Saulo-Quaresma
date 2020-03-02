import { Transactions } from './Transaction';
import fs = require('fs');

export class UserAccount {   
   name: string
   cpf: string
   age: number
   balance: number
   transactions: Transactions[]

   constructor(name: string, cpf: string, age: number) {
      this.name = name;
      this.cpf = cpf;
      this.age = age;
      this.balance = 0;
      this.transactions = [];
   }

   public getBalance(name: string, cpf: string) {
      if(name === this.name && cpf === this.cpf){
         return this.balance;
      } else {
         console.log("Erro. Nome ou CPF inválidos.")
      }
   }

   public addBalance(balance: number): void {
      this.balance += balance;
      console.log(`Novo saldo: ${this.balance}`)  
   }

    public getAccountByCpf() {
      return this.cpf
   }
}
