import React from 'react';
import axios from 'axios';
import ItemUserList from '../ItemUserList/ItemUserList';

const baseUrl = "https://us-central1-future4-users.cloudfunctions.net/api"

class ListaUsuarios extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         userList: [],
      }
   }

   componentDidMount() {
      this.getListaDeUsers();
   }

   getListaDeUsers = () => {
      const url = `${baseUrl}/users/getAllUsers`;
      const token = "sauloqo";

      const request = axios.get(url, {
         headers: {
            "api-token": token,
         }
      });

      request.then((response) => {
         this.setState({ userList: response.data.result })
      }).catch((error) => {
         alert(error.message + "\n" + "É preciso ter usuários cadastrados!")
      });
   }

   render() {
      return (
         <div>
            <h3>Usuários Cadastrados</h3>
            {this.state.userList.map(usuario => (
               <ItemUserList user={usuario} aoDeletarUser={this.getListaDeUsers} />
            ))}
         </div>
      );
   }
}

export default ListaUsuarios;