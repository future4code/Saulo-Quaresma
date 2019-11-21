class Post {
   constructor(titulo, autor, email, mensagem) {
      this.tituloPost = titulo
      this.autorPost = autor
      this.emailPost = email
      this.mensagemPost = mensagem
   }
}

const arrayPosts = []

function aoClicarNoBotaoCriar(){
   const tituloPost = document.getElementById("inputDoTitulo").value
   const autorPost = document.getElementById("inputDoAutor").value
   const emailPost = document.getElementById("inputDeEmail").value
   const mensagemPost = document.getElementById("inputDaMensagem").value

   let novoPost = new Post(tituloPost, autorPost, emailPost, mensagemPost)  //cria uma nova instância com o que vem do input.
   //console.log(novoPost)             //visualiza que a instância foi criada e colocado os valores dos inputs
   
   arrayPosts.push(novoPost)
   console.log(arrayPosts)  
}
