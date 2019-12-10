import React from 'react';
import './App.css';
import CadastroUser from './components/CadastroUser/CadastroUser'
import ListaUsuarios from './components/ListaUsuarios/ListaUsuarios'

class App extends React.Component {
  constructor(props)  {
    super(props);
    this.state = {
      tela: false,
    }
  }

  // onClickListButton = () => {

  // }
  
  render() {

    return(
      <div className="App">
        <button className="botaoListaUsers" onClick={this.onClickListButton}> Lista de Usuários</button>

        <CadastroUser/>
        
        <ListaUsuarios/>
      </div>  
     )
  };
}

export default App;