import React from 'react'
import axios from 'axios'

const baseUrl = "https://us-central1-future4-users.cloudfunctions.net/api";

class ItemUserList extends React.Component {
   constructor(props) {
      super(props)
   }

   aoClicarBotaoDelete = () => {      
      const url = `${baseUrl}/users/deleteUser?id=${this.props.user.id}`;
      const token = "sauloqo";

      axios.delete(url, {
         headers: {
            "api-token": token,
         }
      }).then(() => {
         this.props.aoDeletarUser();
      }).catch(error => {
         alert(error.message)
      })
   };

   render() {
      return (
         <li>
            {this.props.user.name} {" "}
            <button className="botaoDelete" onClick={this.aoClicarBotaoDelete}>X</button>
         </li>
      )
   }
};

export default ItemUserList;