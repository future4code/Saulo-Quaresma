import React from 'react'
import styled from 'styled-components'

const EstiloForm = styled.form`
   margin: 15px;
`

const EstiloLista = styled.ol`
   display: block;
   flex-direction: column;
`

const EstiloItens = styled.li`
   padding: 10px;
`

class Etapa1 extends React.Component {
   constructor(props) {
      super(props)
   }

   render(){
      return (
         <main>
            <h3> ETAPA 1: DADOS GERAIS </h3>    
            <EstiloForm id="formulario">
               <EstiloLista>
                  <EstiloItens>
                     <label for="nome-usuario"> Qual o seu nome? </label><br/>
                     <input type="text" id="nome-usuario" name="Name"/>                     
                  </EstiloItens>
                  <EstiloItens>
                     <label for="idade-usuario"> Qual a sua idade? </label><br/>
                     <input type="number" id="idade-usuario" name="Idade"/>                     
                  </EstiloItens>
                  <EstiloItens>
                     <label for="email-usuario"> Qual seu email? </label><br/>
                     <input type="text" id="email-usuario" name="Email"/>                     
                  </EstiloItens>
                  <EstiloItens>
                     <label for="escolaridade-usuario"> Qual a sua escolaridade? </label><br/>
                     <select id="escolaridade-usuario">
                        <option> Ensino médio incompleto </option>
                        <option> Ensino médio completo </option>
                        <option> Ensino superior incompleto </option>
                        <option> Ensino superior completo </option>
                     </select>                     
                  </EstiloItens>
               </EstiloLista>
            </EstiloForm>            
         </main>
      )
   };
}

export default Etapa1;