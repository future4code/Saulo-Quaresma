import React, { Component } from 'react'
import axios from 'axios'

const baseUrl = "https://us-central1-spotif4.cloudfunctions.net/api";

class ItemPlayList extends Component {  
   aoClicarBotaoDelete = () => {      
      const url = `${baseUrl}/playlists/deletePlaylist?playlistId=${this.props.lista.id}`;
      const token = "sauloqo";

      axios.delete(url, {
         headers: {
            auth: token,
         }
      }).then(() => {
         this.props.aoDeletarPlaylist();
      }).catch(error => {
         alert(error.message)
      })
   };

   render() {
      return (
         <div>
            <li>
               {this.props.lista.name} {" "}
               <button className="botaoDelete" onClick={this.aoClicarBotaoDelete}>X</button>
            </li>
         </div>
      )
   };
}

export default ItemPlayList;