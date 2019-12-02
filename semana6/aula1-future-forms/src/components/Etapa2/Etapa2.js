import React from 'react'
import styled from 'styled-components'

class Etapa2 extends React.Component {
   constructor(props){
      super(props)

   }

   render(){
      return (
         <main>
            <h3> ETAPA 2 - INFORMAÇÕES DO ENSINO SUPERIOR </h3>
            <form>
               <ol>
                  <li>
                     <label for="curso-superior"> Qual curso? </label>
                     <input type="text" id="curso-superior" name="Curso-Superior"/>                     
                  </li>
                  <li>
                     <label for="unidade-ensino"> Qual a unidade de ensino? </label>
                     <input type="text" id="unidade-ensino" name="Unidade-de-Ensino"/>                     
                  </li>                 
               </ol>
            </form>

         </main>
      )
   }
}


export default Etapa2;