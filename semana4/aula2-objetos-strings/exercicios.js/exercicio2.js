 //Exercício 1=
 /**
  * a)O que faz?
  * R: Verifica qual será o valor do dinheiro que for atribuido se for colocado em algum tipo de investimento.
  * 
  * b) Como faz?
  * R: Através de uma função que pede o tipo de investimento e um valor. Com um switch e cases com os tipos de
  * investimento e dependendo do tipo escolhido, eles irá realizar a conta de multiplicação entre o valor digitado e
  * a porcentagem do investimento já adicionado. Caso nenhum tipo de investimento seja selecionado, ele exibe um alerta
  * pedindo que o usuário selecione um tipo de investimento, que possue 4 opções.
  * 
  * c)Qual mensagem no console?
  * R: Será exibido o resultado da variável novoMontante atribuída com a opção do investimento
  * de Ações e um valor de 150, e da variável segundoMontante irá dar o alert por que o usuário não selecionou
  * um dos tipos de investimento. Sendo assim:
  * 
  * console.log(165)
  * console.log(!irá acionar o alert!)
  * 
  */

 //-------------------------------
 //Exercício 2=
 //Explique com as suas palavras o que são e quando podemos/devemos utilizar arrays e objetos.
 /**
  * R: O array é um tipo de objeto, ou seja, é um tipo de variável que pode armazenar várias propriedades e/ou valores
  * dentro dela ao mesmo tempo. Por isso, eles são muito útil quando queremos acesso/modificar/adicionar diferentes informações
  * dentro de uma mesma sequência de código.   * 
  */

  //------------------------------
 //Exercício 3=
 /*
 function criaRetangulo(lado1, lado2){
    const largura = lado1
    const altura = lado2
    const perimetro = 2 * (lado1 + lado2)
    const area = lado1 * lado2

   console.log("Largura: ", largura)
   console.log("Altura: ", altura)
   console.log("Perímetro", perimetro)
   console.log("Área: ", area)
 }

 criaRetangulo(10, 15)
*/

//---------------------------------
//Exercício 4=
/*
const pessoas = {
   nome: "Igor",
   idade: 30,
   email: "iggyfelix@gmail.com",
   endereco: "rua: são sebastião, 154, Palmas-TO",
}

function anonimizarPessoa() {
   let nomeDaPessoa = pessoas.nome;
   const idadeDaPessoa = pessoas.idade;
   const emailDaPessoa = pessoas.email;
   const enderecoDaPessoa = pessoas.endereco;
   
   nomeDaPessoa = "ANÔNIMO";

   console.log(nomeDaPessoa)
   console.log(idadeDaPessoa)
   console.log(emailDaPessoa)
   console.log(enderecoDaPessoa)
   }

anonimizarPessoa()
*/

//---------------------------------
//Exercício 5=
/*
const filmeFavorito = {
   titulo: "The Lord of the Rings: The Fellowship of the Ring",
   ano: 2001,
   diretor: "Peter Jackson",
   atores: 	"Elijah Wood, Ian McKellen, Viggo Mortensen, Sean Bean, Sean Astin",
   atrizes: "Liv Tyles, Cate Blanchett, Sarah McLeod, Katie Jackson...",   
}

function imprimeFilmeTela() {
   const tituloFilme = filmeFavorito.titulo;
   const anoFilme = filmeFavorito.ano;  
   const diretorFilme = filmeFavorito.diretor;  
   const atoresFilme = filmeFavorito.atores;  
   const atrizesFilme = filmeFavorito.atrizes;  
   
   const div = document.getElementById("main-container")

   div.innerHTML += "<p><b>" + "Venha assistir ao filme " + tituloFilme + ", de " + anoFilme + ", dirigido por " + diretorFilme + " e estrelado por " + atoresFilme + ", " + atrizesFilme + "</p>"
}

imprimeFilmeTela()
*/