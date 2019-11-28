//EXERCÍCIO 1
/*
const array = [
	{ nome: "Darvas", idade: 20 },
	{ nome: "Goli", idade: 10 },
	{ nome: "Paulinha", idade: 12 },
	{ nome: "Artur", idade: 89 },
	{ nome: "Soter", idade: 55 },
	{ nome: "Miau", idade: 1 },
	{ nome: "Lu", idade: 32 }
] 

//A)
const soAdultos = array.filter((pessoa) => {
   return pessoa.idade >= 18
})

//B)
const soCriançasAdolescente = array.filter((pessoa) => {
   return pessoa.idade <= 18
})

console.log(soAdultos)
console.log(soCriançasAdolescente)
*/

//EXERCÍCIO 2
/*
const array = [1, 2, 3, 4, 5, 6]

//A)
const multiplicarPorDois = array.map((numeros) => {
   return numeros * 2
})

//B
const multiplicarPorTres = array.map((numeros) => {
   return (numeros * 3).toString()
})

console.log(multiplicarPorDois)
console.log(multiplicarPorTres)
*/
//C


//EXERCÍCIO 3
/*
const pessoas = [
	{ nome: "Darvas", idade: 20, altura: 1.2},
	{ nome: "Goli", idade: 10, altura: 1.8 },
	{ nome: "Paulinha", idade: 12, altura: 2.0},
	{ nome: "Artur", idade: 89, altura: 1.3},
	{ nome: "Soter", idade: 55, altura: 1.0},
	{ nome: "Miau", idade: 1, altura: 2.3 },
	{ nome: "Lu", idade: 32, altura: 1.9 }
]

//A)
const permissaoEntrar = pessoas.filter((pessoas) => {
   if(pessoas.idade >= 14 && pessoas.altura >= 1.5 && pessoas.idade <= 60){
      return pessoas
   }
})

console.log(permissaoEntrar)

//B
const semPermissaoEntrar = pessoas.filter((pessoas) => {
   if(pessoas.idade <= 14 || pessoas.altura <= 1.5 || pessoas.idade >= 60){
      return pessoas
   }
})

console.log(semPermissaoEntrar)
*/

//EXERCÍCIO 4
/*
const consultas = [
	{ nome: "João", genero: "masculino", cancelada: true, dataDaConsulta: "01/10/2019" },
	{ nome: "Pedro", genero: "masculino", cancelada: false, dataDaConsulta: "02/10/2019" },
	{ nome: "Paula", genero: "feminino", cancelada: true, dataDaConsulta: "03/11/2019" },
	{ nome: "Márcia", genero: "feminino", cancelada: false, dataDaConsulta: "04/11/2019" }
]

const emailAutomatico = consultas.filter((paciente) => {
   if(paciente.genero === "feminino" && paciente.cancelada === false){
      console.log("Olá, Sra. " + paciente.nome + ". Estamos enviando esta mensagem para lembrá-lo da sua consulta no dia " + paciente.dataDaConsulta + ". Por favor, acuse o recebimento deste e-mail.")
   }  else if(paciente.genero === "masculino" && paciente.cancelada === false){      
      console.log("Olá, Sr. " + paciente.nome + ". Estamos enviando esta mensagem para lembrá-lo da sua consulta no dia " + paciente.dataDaConsulta + ". Por favor, acuse o recebimento deste e-mail.")
   }
})

const emailAutomaticoCancelado = consultas.filter((paciente) => {
   if(paciente.genero === "feminino" && paciente.cancelada === true){
      console.log("Olá, Sra. " + paciente.nome + ". Infelizmente, sua consulta marcada para o dia " + paciente.dataDaConsulta + " foi cancelada. Se quiser, pode entrar em contato conosco para remarcá-la.")
   }  else if(paciente.genero === "masculino" && paciente.cancelada === false){      
      console.log("Olá, Sr. " + paciente.nome + ". Infelizmente, sua consulta marcada para o dia " + paciente.dataDaConsulta + " foi cancelada. Se quiser, pode entrar em contato conosco para remarcá-la.")
   }   
})
*/

//EXERCÍCIO 5
/*
const contas = [
	{ cliente: "Goli", saldoTotal: 1000, compras: [100, 200, 300] },
	{ cliente: "Paulinha", saldoTotal: 7500, compras: [200, 1040] },
	{ cliente: "Darvas", saldoTotal: 10000, compras: [5140, 6100, 100, 2000] },
	{ cliente: "Lu", saldoTotal: 100, compras: [100, 200, 1700] },
	{ cliente: "Artur", saldoTotal: 1800, compras: [200, 300] },
	{ cliente: "Soter", saldoTotal: 1200, compras: [] }, 
	{ cliente: "Miau", saldoTotal: -300, compras: [800] }
]

const atualizarSaldoTotal = contas.forEach((clientes) => {
   
})
*/
