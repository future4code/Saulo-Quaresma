type posts = {
   autor: string,
   texto: string
}

const arrayPosts: posts[] = [
   {
      autor: "Typescript",
      texto: "Hum... o que fazer com esses mortais?"
   },
   {
      autor: "Eu, eu mesmo e typescript",
      texto: "Medo. Curiosidade. Pensando."
   },
   {
      autor: "Eu mesmo",
      texto: "Me impresta a frase Sócrates, só sei que nada sei."
   },
   {
      autor: "Eu",
      texto: "Typescript + javascript?!"
   },
   {
      autor: "Eu",
      texto: "focando nesse código!"
   },
]

function filtrarPostagens(arrayPosts: posts[], author?: string): posts[] {
   const autoresFiltrados: posts[] = arrayPosts.filter((autor) => {
      return autor.autor === author;
   })

   return autoresFiltrados;
}

const resultado: posts[] = filtrarPostagens(arrayPosts, "Eu");
console.log(resultado)