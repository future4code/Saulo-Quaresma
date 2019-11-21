class meuPost {
   constructor(titulo, autor, email, mensagem) {
      this.inputDoTitulo = titulo
      this.inputDoAutor = autor
      this.inputDeEmail = email
      this.inputDaMensagem = mensagem
   }
}

function aoClicarNoBotaoCriar(){
   meuPost.inputDoTitulo = document.getElementById("inputDoTitulo").value
   meuPost.inputDoAutor = document.getElementById("inputDoAutor").value
   meuPost.inputDeEmail = document.getElementById("inputDeEmail").value
   meuPost.inputDaMensagem = document.getElementById("inputDaMensagem").value

   const novoPost = new meuPost(meuPost.inputDoTitulo, meuPost.inputDoAutor, meuPost.inputDeEmail, meuPost.inputDaMensagem)   //cria uma nova instância com o que vem do input. Ver console.
   console.log(novoPost)
 }

 
