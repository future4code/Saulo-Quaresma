/**
 * Comece seu exercício aqui! :D
 */
//-------------------------------
/*
//INTERPRETAÇÃO//
//Exercício 1:

R: É um loop de soma de valores que se repete por 11 vezes. O resultado impresso é de 55.

//Exercício 2:
  a= adiciona todos os números do array "lista" que são divididos por 5 em um novo array chamado "novaLista" começando pelo 1º elemento, que vale 10;
  b= [10, 15, 20, 25, 30];
  c= Seria imprimido todos os números que fosse divido por 3 ou por 4.

//Exercício 3:

R: Ele irá pegar o valor da variável quantidadeAtual, que é 0, e irá adicionar mais um 0 ao lado, repetindo isso até 4 vezes (ou até outro número respondido pelo usuário).

*/
//ESCRITA DE CÓDIGO//
//Exercício 4:

const arrayOriginal = [5, 15, 22, 36, 47, 59, 66]

//A= MAIOR OU MENOR

console.log("MAIOR OU MENOR:")

let maior = arrayOriginal[6]
let menor = arrayOriginal[0]

for(let num of arrayOriginal){
  if(num > maior){      //verifica se é maior
    maior = num
  }
  if(num < menor){      //verifica se é menor
    menor = num
  }
}
console.log(maior)
console.log(menor)
console.log("---------------------")

//B= DIVIDIDOS POR 10 

console.log("DIVIDIDOS POR 10:")

for(let num = 0; num <= 6; num++){
  const divisao = arrayOriginal[num]
  console.log(divisao / 10)  /* faz a divisão dos elementos do array*/
}

console.log("---------------------")

//C= NOVO ARRAY + ÍMPAR

console.log("NOVO ARRAY + ÍMPAR:")

const novoArray = []

for(const elemento of arrayOriginal){
  if(elemento % 2 === 1){     //divide o número para saber se é ímpar
    novoArray.push(elemento)
  }
}
console.log(novoArray)

console.log("---------------------")

//D= ARRAY COM STRINGS

console.log("ARRAY COM STRINGS:")

//arrayOriginal = [5, 15, 22, 36, 47, 59, 66]

const arrayDeStrings = ["O","elemento","do","índex","é:"]
let mensagem = ""

for(let palavra of arrayDeStrings){
  mensagem = mensagem + " " + palavra  //loop de adicionar o array string à mensagem
}
console.log(mensagem + " " + arrayOriginal[0])    //combina a variável mensagem com o array original para cada elemento dentro dele.
console.log(mensagem + " " + arrayOriginal[1])
console.log(mensagem + " " + arrayOriginal[2])
console.log(mensagem + " " + arrayOriginal[3])
console.log(mensagem + " " + arrayOriginal[4])
console.log(mensagem + " " + arrayOriginal[5])
console.log(mensagem + " " + arrayOriginal[6])

console.log("---------------------")

//Exercício 5:
//jogo de adivinhar
/*
console.log("JOGO DE ADIVINHAR")

console.log("Vamos jogar!")

const penseNumb = Number(prompt("Pense em um número"))

let num = penseNumb

for(let i = 0; i < 11; i++) {
  const jogador2 = Number(prompt("Chute um número:"))
  let chute = jogador2
  if(num > chute){
    const jogador2 = Number(prompt("Chute um número:"))
    console.log("O número chutado foi:", chute)
    console.log("Errrrrrrrou, é maior")
  }
  if(num < chute){
    const jogador2 = Number(prompt("Chute um número:"))
    console.log("O número chutado foi:", chute)
    console.log("Errrrrrrrou, é menor")
  }
  if(num === chute){
    const jogador2 = Number(prompt("Chute um número:"))
    console.log("O número chutado foi:", chute)
    console.log("Acertou!!")
  }  
}
*/

//Exercício 6: