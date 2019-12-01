import React from 'react'
import './PostFormulario.css'
import styled from 'styled-components'
import IconeBHeart from './icon_blackheart.png'
import IconeWHeart from './icon_whiteheart.png'
import IconeComments from './icon_comments.png'

const BodyPage = styled.main`
   margin: 0;
   padding: 0;
`

const TextH2 = styled.h3`
   margin-left: 20px;

`

const FormContainer = styled.section`
   display: flex;
   flex-direction: column;
   padding: 10px 0;
   margin-left: 20px;
   width: 250px;
`

class PostFormulario extends React.Component {
   constructor() {
      super();
   }

   render() {
      return (
         <BodyPage>
            <TextH2>Formulário</TextH2>
            <FormContainer>
               <label> Nome de usuário: </label>
               <input type="text" placeholder="digite um nome:"/>

               <label> Foto de perfil: </label>
               <input type="url" placeholder="https://"/>

               <label> Foto para postagem: </label>
               <input type="url" placeholder="https://"/>

               <button> Postar </button>
            </FormContainer>
            <hr/>
            
            <h4> Postagem </h4>
            <section>


            </section>
         </BodyPage>
      )
   }
}

export default PostFormulario;
