class despesa {
   constructor(nome, valor, despesa, descricao){
      this.nomeDesp = nome
      this.valores = valor
      this.tipoDesp = despesa
      this.descDesp = descricao
   }
}

const primeiroArray = []

function aoClicarNoBotaoCadastro() {
   this.nomeDesp = document.getElementById("nomeDespesa").value,
   this.valores = document.getElementById("valorDinheiro").value;
   this.tipoDesp = document.getElementById("tipoDespesa").value;
   this.descDesp = document.getElementById("descricao").value;

   if(this.nomeDesp === "" || this.valores === "" || this.tipoDesp === "" || this.descDesp === "") {
      alert("Por favor, preencha todos os campos!")

   }  else if(this.nomeDesp !== "" || this.valores !== "" || this.tipoDesp !== "" || this.descDesp !== ""){
      const novaDespesa = new despesa(nomeDesp, valores, tipoDesp, descDesp)
      //console.log(novaDespesa)

      primeiroArray.push(novaDespesa)
      //console.log(primeiroArray)
      listarNaPagina()
      }
   document.getElementById("nomeDespesa").value = ""
   document.getElementById("valorDinheiro").value = ""
   document.getElementById("tipoDespesa").value = "casa"
   document.getElementById("descricao").value = ""
}

function listarNaPagina(){
   const listagem = document.getElementById("container-listaDespesa")
   for(const index of primeiroArray){


      // listagem.innerHTML += "<div>" + "<p>" + "Nome da Despesa: " + index.nomeDesp + "</p>" + "</div>"
      // listagem.innerHTML += "<div>" + "<p>" + "Valor: " + "R$: " + index.valores + "</p>" + "</div>"
      // listagem.innerHTML += "<div>" + "<p>" + "Tipo de Despesa: " + index.tipoDesp + "</p>" + "</div>"
      // listagem.innerHTML += "<div>" + "<p>" +"Descrição: " + index.descDesp + "</p>" + "</div>"
   }
}

function aoClicarBotaoFiltro(){

}

function aoClicarBotaoLimparFiltro(){
   
}

