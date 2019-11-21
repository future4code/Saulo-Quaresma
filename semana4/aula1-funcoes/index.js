function botaoAdicionarTarefa() {

  let novaTarefa = document.getElementById("inputDoUsuario").value; //pega o valor digitado no input pelo usuário  
  const diaSemana = document.getElementById("opcaoDiaSemana").value; //pega a opção no seletor da semana

  if(novaTarefa === ""){
    alert("Preencha uma nova tarefa!")
  } else if(diaSemana === "segunda") {       //adicinona na coluna de segunda-feira  
    const sectionDiaSemana = document.getElementById("caixa-segunda");
    sectionDiaSemana.innerHTML += "<ul><li>" + novaTarefa + "</li></ul>";
  } else if(diaSemana === "terca") {        //adicinona na coluna de terça-feira  
      const sectionDiaSemana = document.getElementById("caixa-terca");
      sectionDiaSemana.innerHTML += "<ul><li>" + novaTarefa + "</li></ul>";
    } else if(diaSemana === "quarta") {       //adicinona na coluna de quarta-feira  
      const sectionDiaSemana = document.getElementById("caixa-quarta");
      sectionDiaSemana.innerHTML += "<ul><li>" + novaTarefa + "</li></ul>";
    } else if(diaSemana === "quinta") {         //adicinona na coluna de quinta-feira  
      const sectionDiaSemana = document.getElementById("caixa-quinta");
      sectionDiaSemana.innerHTML += "<ul><li>" + novaTarefa + "</li></ul>";
    } else if(diaSemana === "sexta") {            //adicinona na coluna de sexta-feira  
      const sectionDiaSemana = document.getElementById("caixa-sexta");
      sectionDiaSemana.innerHTML += "<ul><li>" + novaTarefa + "</li></ul>";
    } else if(diaSemana === "sabado") {             //adicinona na coluna de sábado
      const sectionDiaSemana = document.getElementById("caixa-sabado");
      sectionDiaSemana.innerHTML += "<ul><li>" + novaTarefa + "</li></ul>";
    } else if(diaSemana === "domingo") {              //adicinona na coluna de domingo  
      const sectionDiaSemana = document.getElementById("caixa-domingo");
      sectionDiaSemana.innerHTML += "<ul><li>" + novaTarefa + "</li></ul>";
    }
    document.getElementById("inputDoUsuario").value = "";     //Limpa o campo do input após clicar no botão
}

//seria o reset da lista
/*
function removelistaTarefas(){
  const sectionDiaSemana = document.getElementsByTagName("article").value
  sectionDiaSemana.innerHTML = ""
}
*/