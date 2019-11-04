/*
 * Comece seu exercício aqui! :D
 */

/*
//Interpretação de código//
RESPOSTAS:
  1= O código pede ao usuário por um número e atribiu esse número à uma variável que por fim, através de
  uma condição if e else, testa para ver se esse número é par ou ímpar. Todo número par é imprimido "Passou no teste" e todo número ímpar é imprimido no console como "Não passou no teste".

  2.a= Para verificar o preço de uma fruta.
    b= O preço da fruta Maça é R$ 2.25
    c= O preço seria de R$ 24,55. Por que 2 laranja valem 7 + 1 Maçã de 2,25 + 1 uva de 0.30 + 3 default valendo 5 (por não ter banana como opção de fruta). 
    d= Tirando o break, a variável preco do escopo do case "Pêra" se tornaria inválida e o código pegaria o valor da variável preco do valor padrão, no caso, o do default.
  
  3= Sim, teria erro na variável mensagem dentro do console.log. Por que essa variável não está dentro do bloco do primeiro if, desconsiderando o que foi computado dentro do escopo desse mesmo if.
*/

//Escrita de código//
//Exercício 1:
//A=

const n1 = Number(prompt("Digite o primeiro número:"))
const n2 = Number(prompt("Digite um segundo número:"))

if(n1 > n2) {
  console.log(n1, n2)
} else if(n1 < n2) {
  console.log(n2, n1)
  }

if(n1 === n2) {
  console.log(n1, n2, "todos são iguais")
}

//B=

const nu1 = Number(prompt("Digite o primeiro número:"))
const nu2 = Number(prompt("Digite um segundo número:"))
const nu3 = Number(prompt("Digite um terceiro número:"))

if(nu1 > nu2 && nu2 > nu3 && nu3 < nu1){
  console.log(nu1, nu2, nu3)
} else if(nu1 < nu2 && nu2 < nu3 && nu3 > nu1){
    console.log(nu3, nu2, nu1)
}

if(nu1 === nu2 && nu1 === nu3 && nu2 === nu3){
  console.log(nu1, nu2, nu3, "todos são iguais")
}

//C=

const numero1 = Number(prompt("Digite o primeiro número:"))
const numero2 = Number(prompt("Digite um segundo número:"))
const numero3 = Number(prompt("Digite um terceiro número:"))

if(numero1 > numero2 && numero2 > numero3 && numero3 < numero1){
  console.log(numero1, numero2, numero3)
} else if(numero1 < numero2 && numero2 < numero3 && numero3 > numero1){
    console.log(numero3, numero2, numero1)
}

if(numero1 === numero2 && numero1 === numero3 && numero2 === numero3){
  alert("Digite pelo menos um número diferente")  
}


//Exercício 2:
//Esquema= https://drive.google.com/file/d/10_ZU7iojtHKz7FL4hGbX13wnaD1gzxrI/view?usp=sharing

const temOsso = prompt("Possui ossos que formam seu corpo? [s/n]")

if(temOsso === "s"){
  console.log("é vertebrado.")
  const pelo = prompt("Tem pelo? [s/n]")
  if(pelo === "s"){
    console.log("é mamífero.")
    const racional = prompt("É racional? [s/n]")
    if(racional === "s"){
      console.log("é humano.")
    } else{
      console.log("é mamífero não humano.")
    }
  } else{
    const pena = prompt("Tem penas? [s/n]")
    if(pena === "s"){
      console.log("é ave.")      
    } else{
      const terrestre = prompt("É uma animal terrestre? [s/n]")
      if(terrestre === "s"){
        console.log("é terrestre.")
        const anfibio = prompt("Passa a maior parte da vida em ambiente aquático? [s/n]")
        if(anfibio === "s"){
          console.log("é anfíbio.")
        } else{
            console.log("é réptil.")
        }
      } else{
        console.log("é peixe.")
      }
    }
  }
} else{
    console.log("É invertebrado")
  }

//Exercício 3:

const nomeCompleto = prompt("Qual seu nome completo?")
let tipoJogo = prompt("Qual o tipo de jogo? [IN/DO]")
let etapaJogo = prompt("Indique etapa do jogo? [SF/DT/FI]")
let categoria = prompt("Qual a categoria? [1/2/3/4]")
const quantIng = Number(prompt("Qual a quantidade de ingressos?"))

//MUDA O NOME DA ESCOLHA//
let DO = "Nacional"
let IN = "Internacional"
let SF = "Semifinais"
let DT = "Decisão do 3º lugar"
let FI = "Final"

//RESTO LISTA//
console.log("---Dados da compra---")
console.log("Nome do cliente:", nomeCompleto)
if(tipoJogo === "DO"){
  console.log("tipo de jogo:", DO)
} else{
    console.log("tipo de jogo:", IN)
}
if(etapaJogo === "SF"){
    console.log("Etapa do jogo:", SF)
}
if(etapaJogo === "DT"){
    console.log("Etapa do jogo:", DT)
}
if(etapaJogo === "FI"){
    console.log("Etapa do jogo:", FI)
}
console.log("Categoria:", categoria)
console.log("Quantidade de Ingressos:", quantIng)
console.log("---Valores---")

//VALORES EM REAIS//
if(tipoJogo === "DO"){
//DO - valor do ingresso de SF//
  if(etapaJogo === "SF"){
      //REAIS//
      const vSF1 = Number(1320)
      const vSF2 = Number(880)
      const vSF3 = Number(550)
      const vSF4 = Number(220)
      if(categoria === "1" && categoria !== "2" && categoria !== "3" && categoria !== "4"){
            console.log("Valor do ingresso: R$", vSF1)
      } else if(categoria === "2" && categoria !== "1" && categoria !== "3" && categoria !== "4"){
            console.log("Valor do ingresso: R$", vSF2)
        } else if(categoria === "3" && categoria !== "1" && categoria !== "2" && categoria !== "4"){
            console.log("Valor do ingresso: R$", vSF3)
          } else{
              console.log("Valor do ingresso: R$", vSF4)
            }
      //valor total//
      if(categoria === "1"){
        console.log("Valor total: R$", quantIng * vSF1)
      } else if(categoria === "2"){
          console.log("Valor total: R$", quantIng * vSF2)
        } else if(categoria === "3"){
            console.log("Valor total: R$", quantIng * vSF3)
          } else{
              console.log("Valor total: R$", quantIng * vSF4)
            }
  }

  //DO - valor do ingresso de DT//
  if(etapaJogo === "DT"){
      //REAIS//
      const vDT1 = Number(660)
      const vDT2 = Number(440)
      const vDT3 = Number(330)
      const vDT4 = Number(170)
      if(categoria === "1" && categoria !== "2" && categoria !== "3" && categoria !== "4"){
            console.log("Valor do ingresso: R$", vDT1)
      } else if(categoria === "2" && categoria !== "1" && categoria !== "3" && categoria !== "4"){
            console.log("Valor do ingresso: R$", vDT2)
        } else if(categoria === "3" && categoria !== "1" && categoria !== "2" && categoria !== "4"){
            console.log("Valor do ingresso: R$", vDT3)
          } else{
              console.log("Valor do ingresso: R$", vDT4)
            }
      //valor total//
      if(categoria === "1"){
        console.log("Valor total: R$", quantIng * vDT1)
      } else if(categoria === "2"){
          console.log("Valor total: R$", quantIng * vDT2)
        } else if(categoria === "3"){
            console.log("Valor total: R$", quantIng * vDT3)
          } else{
              console.log("Valor total: R$", quantIng * vDT4)
            }
  }
  //DO - valor do ingresso de FI//
  if(etapaJogo === "FI"){
      //REAIS//
      const vFI1 = Number(1980)
      const vFI2 = Number(1320)
      const vFI3 = Number(880)
      const vFI4 = Number(330)
      
      if(categoria === "1" && categoria !== "2" && categoria !== "3" && categoria !== "4"){
            console.log("Valor do ingresso: R$", vFI1)
      } else if(categoria === "2" && categoria !== "1" && categoria !== "3" && categoria !== "4"){
            console.log("Valor do ingresso: R$", vFI2)
        } else if(categoria === "3" && categoria !== "1" && categoria !== "2" && categoria !== "4"){
            console.log("Valor do ingresso: R$", vFI3)
          } else{
              console.log("Valor do ingresso: R$", vFI4)
            }
      //valor total em REAIS//
      if(categoria === "1"){
        console.log("Valor total: R$", quantIng * vFI1)      
      } else if(categoria === "2"){
          console.log("Valor total: R$", quantIng * vFI2)
        } else if(categoria === "3"){
            console.log("Valor total: R$", quantIng * vFI3)
          } else{
              console.log("Valor total: R$", quantIng * vFI4)
            }
  }
}
//VALORES EM DOLAR//
if(tipoJogo === "IN"){
//IN - valor do ingresso de SF//
  if(etapaJogo === "SF"){
      //DOLAR//
      const dSF1 = Number(321.95)
      const dSF2 = Number(214.63)
      const dSF3 = Number(134.14)
      const dSF4 = Number(53.65)
      if(categoria === "1" && categoria !== "2" && categoria !== "3" && categoria !== "4"){
            console.log("Valor do ingresso: U$", dSF1)
      } else if(categoria === "2" && categoria !== "1" && categoria !== "3" && categoria !== "4"){
            console.log("Valor do ingresso: U$", dSF2)
        } else if(categoria === "3" && categoria !== "1" && categoria !== "2" && categoria !== "4"){
            console.log("Valor do ingresso: U$", dSF3)
          } else{
              console.log("Valor do ingresso: U$", dSF4)
            }
      //valor total em DOLAR//
      if(categoria === "1"){
        console.log("Valor total: U$", quantIng * dSF1)
      } else if(categoria === "2"){
          console.log("Valor total: U$", quantIng * dSF2)
        } else if(categoria === "3"){
            console.log("Valor total: U$", quantIng * dSF3)
          } else{
              console.log("Valor total: U$", quantIng * dSF4)
            }
  }

  //IN - valor do ingresso de DT//
  if(etapaJogo === "DT"){
      //DOLAR//
      const dDT1 = Number(160.97)
      const dDT2 = Number(107.31)
      const dDT3 = Number(80.48)
      const dDT4 = Number(41.46)
      if(categoria === "1" && categoria !== "2" && categoria !== "3" && categoria !== "4"){
            console.log("Valor do ingresso: U$", dDT1)
      } else if(categoria === "2" && categoria !== "1" && categoria !== "3" && categoria !== "4"){
            console.log("Valor do ingresso: U$", dDT2)
        } else if(categoria === "3" && categoria !== "1" && categoria !== "2" && categoria !== "4"){
            console.log("Valor do ingresso: U$", dDT3)
          } else{
              console.log("Valor do ingresso: U$", dDT4)
            }
      //valor total em DOLAR//
      if(categoria === "1"){
        console.log("Valor total: U$", quantIng * dDT1)
      } else if(categoria === "2"){
          console.log("Valor total: U$", quantIng * dDT2)
        } else if(categoria === "3"){
            console.log("Valor total: U$", quantIng * dDT3)
          } else{
              console.log("Valor total: U$", quantIng * dDT4)
            }
  }
  //IN - valor do ingresso de FI//
  if(etapaJogo === "FI"){
      //DOLAR//
      const dFI1 = Number(482.92)
      const dFI2 = Number(321.95)
      const dFI3 = Number(214.63)
      const dFI4 = Number(80.48)
      
      if(categoria === "1" && categoria !== "2" && categoria !== "3" && categoria !== "4"){
            console.log("Valor do ingresso: U$", dFI1)
      } else if(categoria === "2" && categoria !== "1" && categoria !== "3" && categoria !== "4"){
            console.log("Valor do ingresso: U$", dFI2)
        } else if(categoria === "3" && categoria !== "1" && categoria !== "2" && categoria !== "4"){
            console.log("Valor do ingresso: U$", dFI3)
          } else{
              console.log("Valor do ingresso: U$", dFI4)
            }
      //valor total em DOLAR//
      if(categoria === "1"){
        console.log("Valor total: U$", quantIng * dFI1)      
      } else if(categoria === "2"){
          console.log("Valor total: U$", quantIng * dFI2)
        } else if(categoria === "3"){
            console.log("Valor total: U$", quantIng * dFI3)
          } else{
              console.log("Valor total: U$", quantIng * dFI4)
            }
  }
}