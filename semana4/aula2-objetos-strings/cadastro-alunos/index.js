function novoCadastro(){
   const nome = document.getElementById("form-nome").value   //pega o valor do input com o nome
   const idade = document.getElementById("form-idade").value   //pega o valor do input com a idade
   const email = document.getElementById("form-email").value   //pega o valor do input com o email

   if(nome === "" || idade === "" || email === ""){         //verifica se todos os campos foram preenchidos
      alert("Preencha todos os campos")
   } else if(nome !== "" || idade !== "" || email !== "") {
      const div = document.getElementById("usuarioCadastrado")   //pega o local da div no HTML
      div.innerHTML += "<p>" + "Nome: " + nome + "</p>"          //adiciona do campo nome + o valor do input
      div.innerHTML += "<p>" + "Idade: " + idade + "</p>"        //adiciona do campo idade + o valor do input
      div.innerHTML += "<p>" + "Email: " + email + "</p>"        //adiciona do campo email + o valor do input
      div.innerHTML += "<p>" + "----------------" + "</p>"       //adiciona uma linha para separar. Algo somente visual

      document.getElementById("form-nome").value = ""          //reseta o input nome
      document.getElementById("form-idade").value = ""         //reseta o input idade
      document.getElementById("form-email").value = ""         //reseta o input email
      alert("Aluno cadastrado com sucesso!")
   }
}

function removelistaAlunos(){
   const div = document.getElementById("usuarioCadastrado")    //pega o local da div no HTML
   div.innerHTML = "";                 //delete todos os elementos da lista
}
