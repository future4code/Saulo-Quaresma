import { UserAccount } from './UserAccount';
import { JSONFileManager } from './JSONFileManager';

export class Bank {
   private userAccounts: UserAccount[];
   private fileManager: JSONFileManager;

   constructor(fileName: string) {
      this.userAccounts = [];
      this.fileManager = new JSONFileManager(fileName);
      this.fileManager.writeObjectFromFile(this.userAccounts);
   }

   public createAccount(name: string, cpf: string, age: number): void {
      if (age < 18) {
         console.log("Menores de idade não podem criar contas.")
      } else {
         this.userAccounts = this.getAllAccounts();
         this.userAccounts.push(new UserAccount(name, cpf, age));
         this.saveAccounts();
         console.log("Conta criada com sucesso.")
      }
   }

   public getAllAccounts(): UserAccount[] {
      this.userAccounts = this.fileManager.getObjectFromFile();
      return this.userAccounts;
   }  
   
   private saveAccounts(): void {
      this.fileManager.writeObjectFromFile(this.userAccounts)
   }
}