import React from 'react'
import './PostInstagram.css'

class PostInstagram extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         //trocarFavorito = false,
         quantidadeClique: 0,

      }
   }

   aClicarCoraçãoCurtir = () => {
      const cliqueQuantidade = this.state.quantidadeClique + 1;
      this.setState({
         quantidadeClique: cliqueQuantidade,
      })
   }

   render() {
      return(
         <main id="main-container">
            <section className="post-container">
               <p>{this.props.usuario}</p>
               <img alt="postagem-foto" src={this.props.imagem}/>

               <div id="container-icones">
               <button onClick={this.aClicarCoraçãoCurtir}><img className="icone-favoritos" alt="curtir" src={this.props.iconeFavoritar}/></button> 
               <p>{this.state.quantidadeClique}</p>

               <button><img className="icone-comentar" alt="comentar" src={this.props.iconeComemtar}/></button>

               </div>

            </section>
         </main>
      )
   }
}

export default PostInstagram;