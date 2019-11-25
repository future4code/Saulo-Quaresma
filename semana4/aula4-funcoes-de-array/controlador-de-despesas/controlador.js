/**CRIA A CLASSE DESPESA */
class despesa {
   constructor(valor, despesa, descricao){
      this.valores = valor
      this.tipoDesp = despesa
      this.descDesp = descricao
   }
}

//CRIA UM ARRAY VAZIO
const arrayDespesas = []

//FUNÇÃO DE CADASTRAR OS DADOS NA PÁGINA HTML
function aoClicarNoBotaoCadastro(){
   if (document.getElementById("valorGasto").value == "" || document.getElementById("tipoDespesa") == "" || document.getElementById("descricao").value == "") {
      alert("Por favor, preencha todos os campos!");           //alerta de campos vazios
   }  else {
      const valorDespesa = document.getElementById("valorGasto").value;
      const tipoDespesa = document.getElementById("tipoDespesa").value;
      const descDespesa = document.getElementById("descricao").value;

      const novaDespesa = new despesa(valorDespesa, tipoDespesa, descDespesa)       //coleta informções para o novo array
      arrayDespesas.push(novaDespesa)                                               //adicona em tudo em um novo array
      //console.log(arrayDespesas)
      const listaDeDespesas = document.getElementById("lista-despesa")
      listaDeDespesas.innerHTML = ""
      for(const elementos of arrayDespesas) {               //adiciona na página o que foi cadastrado
         listaDeDespesas.innerHTML += "<div>" + "Valor: " + "<p>" + elementos.valores + "</p>" + "</div>";
         listaDeDespesas.innerHTML += "<div>" + "Tipo de Despesa: " + "<p>" + elementos.tipoDesp + "</p>" + "</div>";
         listaDeDespesas.innerHTML += "<div>" + "Descrição: " + "<p>" + elementos.descDesp + "</p>" + "</div>";
      }
      document.getElementById("valorGasto").value = "";                           //apaga o que foi digitado nos campos
      document.getElementById("tipoDespesa").value = "Casa";
      document.getElementById("descricao").value = "";

      somarValoresDespesas()
   }
}

//FUNÇÃO DO BOTÃO FILTRAR
function aoClicarBotaoFiltro() {
   if(document.getElementById("tipoDespesaDetalhes").value == "" || document.getElementById("minimo") == "" || document.getElementById("maximo").value == "") {
      alert("Por favor, preencha todos os campos!");                  //alerta de campos vazios
   } else {
      const resultadosFiltro = document.getElementById("resultados-filtragem")
      resultadosFiltro.innerHTML = ""
      const tipoDespesa = document.getElementById("tipoDespesaDetalhes").value;
      //console.log(tipoDespesa)
      const valorMinimo = Number(document.getElementById("minimo").value)
      //console.log(valorMinimo)
      const valorMaximo = Number(document.getElementById("maximo").value)   
      //console.log(valorMaximo)   
      const despesasFiltradas = arrayDespesas.filter( despesa => {                  //filtra o que foi desejado nos filtros o que foi cadastrado
         return despesa.tipoDesp === tipoDespesa && despesa.valores >= valorMinimo && despesa.valores <= valorMaximo
      })
      for(const elementos of despesasFiltradas) {                       //adiciona na página o que foi cadastrado
         resultadosFiltro.innerHTML += "<div>" + "Valor: " + "<p>" + elementos.valores + "</p>" + "</div>";
         resultadosFiltro.innerHTML += "<div>" + "Tipo de Despesa: " + "<p>" + elementos.tipoDesp + "</p>" + "</div>";
         resultadosFiltro.innerHTML += "<div>" + "Descrição: " + "<p>" + elementos.descDesp + "</p>" + "</div>";
      }
      document.getElementById("tipoDespesa").value = "Casa";            //apaga o que foi digitado nos campos
      document.getElementById("minimo").value = "";
      document.getElementById("maximo").value = "";
   }
}

//FUNÇÃO LIMPAR FILTROS
function aoClicarBotãoLimparFiltros(){
   const resultadosFiltro = document.getElementById('resultados-filtragem')
   resultadosFiltro.innerHTML = ""                    //apaga o que foi filtrado
   alert("Os resultados foram limpos!")               //amostra que os resultados foram limpados da página
}

//FUNÇÃO DO EXTRATO DE VALORES
function somarValoresDespesas() {
   const insereExtrato = document.getElementById("valorTotalExtrato")
   let valorTotalExtrato = arrayDespesas.reduce((valorTotal, quantValor) =>
      parseInt(valorTotal) + parseInt(quantValor.valores), 0)           //soma os valores adicionados no primeiro index do array

   insereExtrato.innerHTML = "Valor Total: " + "<p>" + " R$ " + valorTotalExtrato + "</p>";           //adiciona na página o total das despesas
}
