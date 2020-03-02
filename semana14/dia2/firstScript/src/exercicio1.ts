type dados = {
   quantidadeNumeros: number,
   quantidadeImpares: number,
   somaDeTodos: number,
};

const array: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function contagemArray(array: number[]): dados {
   for (let i = 0; i < array.length; i++) {
      if (i % 2 !== 0) {

      } else {
         
      }
   };
   
  const resposta: dados = {
      quantidadeNumeros: array.length,
      quantidadeImpares: 0,
      somaDeTodos: 0,
   };

   return resposta;
};

const dadosResultados: dados = contagemArray(array);
console.log(dadosResultados);