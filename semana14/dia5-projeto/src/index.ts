import * as moment from 'moment';
import fs = require('fs');

moment.locale('pt-br')

type client = {
   name: string,
   cpf: string,
   birthday: string,
   balance: number,
   extract: transaction[]
};

type transaction = {
   value: number,
   date: Date,
   description: string
}

const fileName = "../dia5-projeto/accounts.json"

let newName: string = process.argv[2];
let newCPF: string = process.argv[3];
let newBDay: string = moment(process.argv[4], "DD/MM/YYYY").toISOString().split('T')[0]

let accExtract: string[] = [];

//Cria um cliente
let newClient: client = {
   name: newName,
   cpf: newCPF,
   birthday: newBDay,
   balance: 0,
   extract: []
}

const createAccount = (newClient: client) => {
   let clients: client[] = []
   try{
      clients = JSON.parse(fs.readFileSync(fileName).toString());
   } catch(e) {}

      clients.push(newClient);
      fs.writeFileSync(fileName, JSON.stringify(clients, null, 3));

      console.log("Novo cliente criado com sucesso.")   
}

createAccount(newClient)