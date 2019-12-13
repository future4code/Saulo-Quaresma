import React, { Component } from 'react';
import axios from 'axios';

const baseUrl = "https://us-central1-spotif4.cloudfunctions.net/api";
const token = "sauloqo";

class AddPlaylist extends Component {
   constructor(props) {
      super(props);
      this.state = {
         playlistName: "",
      };
   };

   createUserPlaylist = () => {
      const url = `${baseUrl}/playlists/createPlaylist`
      const data = {
         name: this.state.playlistName,
      }
   
      axios.post(url, data, {
         headers: {
            auth: token,
          }
      });
   
      this.setState({ playlistName: ""});         
   }

      

   onNewPlaylistNameChange = event => {
      this.setState({playlistName: event.target.value});
   };

   render() {
      return(
         <div>
            <h3>Cadastro de Playlists</h3>

            <p>Digite um nome para a playlist:</p>
            <input type="text" onChange={this.onNewPlaylistNameChange} value={this.state.playlistName} placeholder="Digite um nome"/>

            <button onClick={this.createUserPlaylist}>Criar</button>
         </div>
      );
   };
}


export default AddPlaylist;