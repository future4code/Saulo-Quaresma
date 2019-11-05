import comprarCarta from './naoMexer.js'
// NÃO REMOVA ESTA LINHA

/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

//DESAFIO:
// Não consegui ver com clareza como colocar as regras adicionais do desafio no que eu já tinha feito à tempo da entrega. Mas vou continuar tentando.

/*
if(confirm("Deseja iniciar uma nova rodada?")){     //pergunta ao usuário se ele quer jogar.
  console.log("Bem vindo ao jogo de Blackjack!")  
  const cartaUsu1 = comprarCarta()    //escolhe a primeira carta para o usuário.
  const cartaUsu2 = comprarCarta()    //escolhe a segunda carta para o usuário.
  const cartaComp1 = comprarCarta()     //escolhe a primeira carta para o computador.
  const cartaComp2 = comprarCarta()     //escolhe a segunda carta para o computador.
  
  
  for(let){
    let pontuacaoUsuario = cartaUsu1.valor + cartaUsu2.valor      //soma os valores das cartas.  
    let pontuacaoComputador = cartaComp1.valor + cartaComp2.valor     //soma os valores das cartas.
    console.log("Usuário - cartas: " + cartaUsu1.texto + " e " + cartaUsu2.texto + " - pontuação= " + pontuacaoUsuario)
    console.log("Computador - cartas: " + cartaComp1.texto + " e " + cartaComp2.texto + " - pontuação= " + pontuacaoComputador)

    if(pontuacaoUsuario > pontuacaoComputador){     //se pontos do usuário for maior que o do computador.
    console.log("O usuário ganhou!")
    console.log("Jogo terminado!")      //indica o término do jogo.
    } else if(pontuacaoComputador > pontuacaoUsuario){       //se pontos do computador for maior que o do usuário.
    console.log("O computador ganhou!")
    console.log("Jogo terminado!")
      } else if(pontuacaoUsuario === pontuacaoUsuario){     //se pontos do usuário e do computador forem iguais.
        console.log("Empate!")
        console.log("Jogo terminado!")
        }
  }  
} else{
    console.log("O jogo acabou!")     //o usuário não quer começar a rodada.    
  }
*/