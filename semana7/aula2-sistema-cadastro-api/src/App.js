import React from 'react';
import './App.css';
import CadastroUser from './components/CadastroUser/CadastroUser'
import ListaUsuarios from './components/ListaUsers/ListaUsers'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tela: "cadastro",
    }
  }

  onClickListButton = () => {
    if (this.state.tela === "cadastro") {
      this.setState({ tela: "lista" })
    } else {
      this.setState({ tela: "cadastro" })
    }
  }

  render() {
    const textoBotao = this.state.tela === "cadastro" ? "Lista de Usuários" : "Voltar para cadastro"

    return (
      <div className="App">
        <button className="botaoListaUsers" onClick={this.onClickListButton}> {textoBotao}</button>
        {this.state.tela === "cadastro" ? <CadastroUser /> : <ListaUsuarios />}
      </div>
    )
  };
}

export default App;