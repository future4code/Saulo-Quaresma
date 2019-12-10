import React from 'react'
import axios from 'axios'

const baseUrl = "https://us-central1-future4-users.cloudfunctions.net"

class CadastroUser extends React.Component {
  constructor(props) {
     super(props);
     this.state = {
        nomeUser: "",
        emailUser: "",
     }
  }

  postCreateNewUser = () => {
    const url = `${baseUrl}/api/users/createUser`;
    const token = "sauloqo";

    const data = {
      name: this.state.nomeUser,
      email: this.state.emailUser
    }

    axios.post(url, data, {
       headers: {
         "api-token": token,
       }
     });
  };  

  onNewNameUserChange = event => {
     this.setState({nomeUser: event.target.value});
  }

  onNewEmailUserChange = event => {
     this.setState({emailUser: event.target.value})
  };

  render() {
    return(
      <div className="CadastroUser"> 

        <form>
            <p>Nome:</p>
            <input type="text" onChange={this.onNewNameUserChange} value={this.state.nomeUser} placeholder="Digite um nome"/>
     
            <p>Email:</p>
            <input type="email" onChange={this.onNewEmailUserChange} value={this.state.emailUser} placeholder="Digite um email"/>
          
            <button onClick={this.postCreateNewUser}>Salvar</button>
        </form>

      </div>  
     )
  };
}

export default CadastroUser;