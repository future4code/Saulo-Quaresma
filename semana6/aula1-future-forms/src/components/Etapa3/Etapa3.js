import React from 'react'
import styled from 'styled-components'

class Etapa3 extends React.Component {
   constructor(props){
      super(props)

   }

   render(){
      return (
         <main>
            <h3> ETAPA 3 - INFORMAÇÕES GERAIS DE ENSINO </h3>
            <form>
               <ol>
                  <li>
                     <label for="curso-graduacao"> Por que você não terminou um curso de graduação? </label>
                     <input type="text" id="curso-graduacao" name="Curso-Graduacao"/>                     
                  </li>
                  <li>
                     <label for="unidade-ensino"> Qual a unidade de ensino? </label>
                     <input type="text" id="unidade-ensino" name="Unidade de Ensino"/>                     
                  </li>                 
               </ol>
            </form>

         </main>
      )
   }
}


export default Etapa3;