import React from 'react'
import styled from 'styled-components'

const EstiloDiv = styled.div`
   margin-top: 10px;
   color: white;
`

class Tarefa extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         id: Date.now(),
         descricao: this.props.descricao,
         completa: false,
      }
   }

   //FUNÇÃO QUE MODIFICA O ITEM DA LISTA PARA COMPLETADA
   completarTarefa = () => {
      this.setState({
         completa: !this.state.completa   
      })
   }
   
   render() {   
      return (
         <EstiloDiv>
            {this.state.completa ?
               <li onClick={this.completarTarefa}> <s>{this.state.descricao}</s></li>
               : <li onClick={this.completarTarefa}> {this.state.descricao} </li>
            }
         </EstiloDiv>
      )
   }
}

export default Tarefa;