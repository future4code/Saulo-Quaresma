import React from 'react'
import axios from 'axios'

const baseUrl = "https://us-central1-future4-users.cloudfunctions.net"

class ListaUsuarios extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         userList: '',
      }
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
         this.setState({userList: response.data})         
      }).catch((error) => {
        //alert(error.message)
      });
   }

   componentDidMount() {
      this.getListaDeUsers();
   }

   render() {
      return(
         <div>
            <h3>Usuários Cadastrados</h3>
            <ul>
               
            </ul>
         </div>
      )
   }
}


export default ListaUsuarios;