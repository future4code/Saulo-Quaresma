import { ResidentialClient } from "./residentialClient";
import { CommercialClient } from "./commercialClient";
import { IndustrialClient } from "./industrialClient";
import { Client } from "./client"
import { ClientManager } from "./clientManager";

//testando classe ResidentClient
console.log("testando classe ResidentClient")

const resident1 = new ResidentialClient("Saulo", "123.456.789-10", "10100-100", 1234, 180, "Saulo");
console.log(resident1)

resident1.calculateBill()
console.log("Consumo de energia em R$:", resident1.calculateBill())
console.log("---------------")

const resident2 = new ResidentialClient("Sauron", "019.876.543-21", "20200-200", 4321, 360, "Saulo");
console.log(resident2)

console.log("Consumo de energia em R$:", resident2.calculateBill())
console.log("---------------")



//testando classe CommercialClient
console.log("testando classe CommercialClient")

const commerce1 = new CommercialClient("McDonald's", "12.345.678/9100-12", "60600-600", 1234, 720, "McDonald's")
console.log(commerce1)

console.log("Consumo de energia em R$:", commerce1.calculateBill())
console.log("---------------")

const commerce2 = new CommercialClient("Habib's", "21.111.098/7654-21", "70700-700", 4321, 900, "Habib's");
console.log(commerce2)

console.log("Consumo de energia em R$:", commerce2.calculateBill())
console.log("---------------")



//testando classe IndustrialClient
console.log("testando classe IndustrialClient")

const industry1 = new IndustrialClient("Vale", "012345678910", "10100-100", 1234, 1200, "Vale")
console.log(industry1)

console.log("Consumo de energia em R$:", industry1.calculateBill())
console.log("---------------")

const industry2 = new IndustrialClient("Boticário", "01987654321", "20200-200", 4321, 1100, "Boticário")
console.log(industry2)

console.log("Consumo de energia em R$:", industry2.calculateBill())
console.log("---------------")



//testando classe ClientManager
console.log("testando classe ClientManager")

const client = new ClientManager()

//testando adicionar no array de clientes
client.addClient(resident1)
client.addClient(commerce2)
client.addClient(industry1)

console.log(client)

//testando imprimir lista de clientes no array
client.printClientBills()

//testando calcular todos os valores nas contas dos clientes no array
client.calculateAllIncome()