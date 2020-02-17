import { Bank } from './Banks';
//import { UserAccount } from './UserAccount';

const f4Bank = new Bank("accounts.json");

console.log("Testando criar clientes")
console.log("---------------")
f4Bank.createAccount("Saulo", "12345678910", 33)
f4Bank.createAccount("Sauron", "01987654321", 18)
f4Bank.createAccount("Saul", "98765432100", 23)

console.log("Contas do F4Bank:", f4Bank.getAllAccounts())
console.log("---------------")

// console.log("Testando adicionar saldo")
// console.log("---------------")

// const newBalance = new UserAccount("Saulo","12345678910", 33)

// newBalance.addBalance(350)
// console.log("Saldo adicionado com sucesso.")
// console.log("Saldo da conta de nome Saulo:", newBalance.getBalance("Saulo","12345678910"))
// console.log("Contas do F4Bank:", f4Bank.getAllAccounts())