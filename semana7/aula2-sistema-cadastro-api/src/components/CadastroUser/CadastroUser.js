import React from 'react'
import axios from 'axios'

const baseUrl = "https://us-central1-future4-users.cloudfunctions.net/api"

class CadastroUser extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nomeUser: "",
      emailUser: "",
    }
  }

  postCreateNewUser = () => {
    const url = `${baseUrl}/users/createUser`;
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

    this.setState({ nomeUser: "", emailUser: "" });
  };

  onNewNameUserChange = event => {
    this.setState({ nomeUser: event.target.value });
  }

  onNewEmailUserChange = event => {
    this.setState({ emailUser: event.target.value })
  };

  render() {
    return (
      <div className="CadastroUser">
        <form>
          <h3>Cadastro de Usuários</h3>
          <p>Nome:</p>
          <input type="text" onChange={this.onNewNameUserChange} value={this.state.nomeUser} placeholder="Digite um nome" />

          <p>Email:</p>
          <input type="email" onChange={this.onNewEmailUserChange} value={this.state.emailUser} placeholder="Digite um email" />

          <button className="botaoSalvar" onClick={this.postCreateNewUser}>Salvar</button>
        </form>
      </div>
    )
  };
}

export default CadastroUser;