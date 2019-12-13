import React from 'react';
import axios from 'axios';
import ItemPlayList from '../ItemPlaylist/index';

const baseUrl = "https://us-central1-spotif4.cloudfunctions.net/api";

class ListaUsuarios extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         playlist: [],
      }
   }

   componentDidMount() {
      this.getPlaylist();
   }

   getPlaylist = () => {
      const url = `${baseUrl}/playlists/getAllPlaylists`;
      const token = "sauloqo";

      const request = axios.get(url, {
         headers: {
            auth: token,
         }
      });

      request.then((response) => {
         this.setState({ playlist: response.data.result.list })
      });
   }

   componentDidUpdate() {
      this.getPlaylist();
   }

   render() {
      return (
         <div>
            <h3>Playlists Criadas</h3>
            {this.state.playlist.map(nome => (<ItemPlayList lista={nome} aoDeletarPlaylist={this.getPlaylist}/>
            ))}
         </div>
      );
   }
}

export default ListaUsuarios;