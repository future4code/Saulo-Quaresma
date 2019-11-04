/**
 * Comece seu exercício aqui! :D
 */

/**
 *
 * EXERCÍCIOS DE INTERPRETAÇÃO
 *
 * EXERCÍCIO 1
 */
const bool1 = true;
const bool2 = false;
const bool3 = !bool2;

let resultado = bool1 && bool2 && bool3;
console.log("a. ", resultado);

resultado = (bool2 || bool1) && !bool3;
console.log("b. ", resultado);

resultado = !resultado && (bool1 || bool1);
console.log("c. ", resultado);

resultado = resultado && (!bool1 || bool2) && !bool3;
console.log("d. ", resultado);

console.log("e. ", typeof resultado);

/*Respostas Exe1:
  a= false (por que só devolve true quando todos os booleanos forem True, o bool2 é false);
  b= false (por que bool2 com bool1 é false e !bool3 é false também);
  c= true (por que todos os booleanos envolvidos são true);
  d= false (por que todos booleanos envolvidos são false);
  e= boolean (por que typeof permite ver o tipo do valor da variável resultado)

*/
/**
 * EXERCÍCIO 2
 */
let array;
console.log("I. ", array);

array = null;
console.log("II. ", array);

array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
console.log("III. ", array.length);

let i = 0;
console.log("IV. ", array[i], " e ", array[i + 1]);

array[i + 1] = 19;
const valor = array[i + 6];
console.log("V. ", array[i + 1], " e ", valor);

i += 1;
array[i] = array[i - 1];
console.log("VI. ", array[i]);

i = array.length - 1;
array[i] = array[i - 3];
const resultadoC = array[i] % array[1];
console.log("VII. ", resultadoC); 

/* Respostas Exer2:
    A= 
    1- o array possue valor indefinido;
    2- o array não possue valor;
    3- 11 (por que o array possui 11 elementos);
    4- 3 e 4 (3 por que a index possue o valor do array 0, sendo o primeiro elemento do array definido anteriormente e 4 por que é o valor desse index + 1);
    5- 19 e 9 (19 por que o array[i+1] passou a valer 19. E 9 por que o index vale 3 + 6);
    6- 3 (por que i, que vale 3 (que foi atribuido no let i= 0), + 1 é 4 e com - 1 é 3);
    7- 1 (por que o array )

    B= O primeiro index do array é 3;
    C= Usando console.log(array.length);
    D= I=undefined, II=null, III=11, IV=3 e 4, V=19 e 9, VI=3, VII=1.
*/

/**
 *
 * EXERCÍCIOS DE ESCRITA DE CÓDIGO
 *
 * EXERCÍCIO 1
 */
//A=
const K = ((77 - 32) * 5) / 9 + 273.15;
console.log("O valor de ºF em Kelvin é = " + K);

//B=
const F = (80 * 9) / 5 + 32;
console.log("O valor de ºC em ºF é = " + F);

//C=
const Fah = (30 * 9) / 5 + 32;
console.log("O valor de ºC em ºF é = " + Fah);
const Kel = ((Fah - 32) * 5) / 9 + 273.15;
console.log("O valor de ºC em Kelvin é = " + Kel);

//D=
const Fahrenheit = (prompt("Qual o valor de Celsius?") * 9) / 5 + 32;
console.log("O valor de ºC em ºF é = " + Fahrenheit);
const Kelvin = ((Fahrenheit - 32) * 5) / 9 + 273.15;
console.log("O valor de ºC em Kelvin é = " + Kelvin);

/**
 * EXERCÍCIO 2
 */
const nome = prompt("Qual seu nome?")
console.log("Qual seu nome?")
console.log("Resposta: " + nome);

const cor = prompt("Qual sua cor favorita?")
console.log("Qual a sua cor favorita?")
console.log("Resposta: " + cor);

const animal = prompt("Qual o nome do seu pet?")
console.log("Qual o nome do seu pet?")
console.log("Resposta: " + animal);

const signo = prompt("Qual o seu signo?")
console.log("Qual o seu signo?")
console.log("Resposta: " + signo);

const comida = prompt("Qual a sua comida predileta?")
console.log("Qual a sua comida predileta?")
console.log("Resposta: " + comida);

/**
 * EXERCÍCIO 3
 */

 //Obs: salário mínimo = R$998,00
//A=
 const Salario = Number(998,00)
 let KWh = Number(Salario) / 5
 console.log("Cada quilowatt-hora valem: " + "R$" + KWh)

//B=
const Kwat = Number(280)
let Consumo = Kwat * KWh
console.log("O valor pago por 280 quilowatt-hora será de: " + "R$" + Consumo)

//C=
let Desconto = (Consumo * 15) / 100
console.log("O valor pago com desconto será de: " + "R$" + Desconto) 