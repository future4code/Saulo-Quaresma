import React from 'react'
import './ImageButton.css'

function ImageButton(props) {
   return (
      <main>
         <button className="botao-ver-mais">
            <img alt="facebook" src={props.image}/>
            {props.nomeBotao}
         </button>         
      </main>
   );
}

export default ImageButton;