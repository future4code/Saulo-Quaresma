import React from 'react'

class ListaTarefas extends React.Component {
   constructor(props)  {
      super(props)
      console.log("constructor")
      this.state = {
         tarefa: "",
      };
   }

   componentDidMount()  {
      console.log("componentDidMount")
   }

   componentDidUpdate() {
      console.log("componentDidUpdate")
   }

   componentWillUnmount()  {      
      const stateComoString = JSON.stringify(this.state);
      console.log("componentWillUnmount", stateComoString)
      localStorage.setItem("valorInput", stateComoString)
   }

   handleOnChangeTarefa = (event) => {
      this.setState({tarefa: event.target.value});
   };

   render() {
      console.log('render')
      return (
         <div>
            <input type="text" value={this.state.tarefa} onChange={this.handleOnChangeTarefa} placeholder={"Tarefa:"}/>
            <button> Adicionar </button>
            <label>Filtro</label>
            <select>
               <option>Nenhum</option>
               <option>Pendentes</option>
               <option>Completas</option>
            </select>
         </div>
      );
   }
}

export default ListaTarefas;