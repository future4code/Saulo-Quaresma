import React from 'react'
import Tarefa from '../Tarefa/Tarefa';
import styled from 'styled-components'

const EstiloDiv = styled.div`
   margin: 20px;
`

const EstiloBotao = styled.button`
   border: 1px solid black;
   border-radius: 15px;
   background: #5f4339;
   color: white;
   padding: 5px 10px;
   margin-left: 10px;
   text-shadow: 1px 2px black;
`

const EstiloLabel = styled.label`
   padding: 0 15px;
   font-weight: bold;
   justify-content: center;
   color: white;
   text-shadow: 1px 2px black;
`

class AdicionarTarefa extends React.Component {
   constructor(props)  {
      super(props)
      this.state = {
         descricao: "",       //Estado inicial da informação no input
         listaDeTarefa: [],   //Estado inicial da informação dento da lista
         //filtro: "nenhum"     //Estado inicial do filtro nenhum, que mostra toda a lista de tarefas
      };
   }

   //FUNÇÃO PARA PEGAR INFORMAÇÃO DO INPUT DE TAREFAS
   handleChangeTarefa = (event) => {
      this.setState({descricao: event.target.value});      
   };

   //  FUNÇÃO PARA PEGAR INFORMAÇÃO DO SELETOR DE FILTRO DE TAREFAS
   // handleChangeFiltro = (event) => {
   //    this.setState({filtro: event.target.value});      
   // }

   //FUNÇÃO QUE ADICIONA UMA NOVA TAREFA NO ARRAY LISTA DE TAREFAS
   addTarefa = () => {
      const novaTarefa = {
         desc: this.state.descricao,
         completa: false,
      }
      const novaLista = [...this.state.listaDeTarefa, novaTarefa]
      this.setState({listaDeTarefa: novaLista, descricao: ""})
   }
   
   render() {
      const novaTarefas = this.state.listaDeTarefa.map(elemento => {
         return (
            <Tarefa descricao={elemento.desc}/>
         )
       });      
      
      return (
         <EstiloDiv>
            <input 
               type="text"
               value={this.state.descricao}
               onChange={this.handleChangeTarefa}
               placeholder={"Escreva uma nova tarefa:"}
            />
            <EstiloBotao onClick={this.addTarefa}> Adicionar </EstiloBotao>
            <EstiloLabel>Filtro</EstiloLabel>
            <select value={this.state.filtro} onChange={this.handleChangeFiltro}>
               <option value="nenhum">Nenhum</option>
               <option value="pendentes">Pendentes</option>
               <option value="completas">Completas</option>
            </select>
            {novaTarefas}
         </EstiloDiv>
      );
   }
}

export default AdicionarTarefa;