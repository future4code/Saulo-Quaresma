import React from 'react';
import './App.css';
import Etapa1 from './components/Etapa1/Etapa1';
import Etapa2 from './components/Etapa2/Etapa2';
import Etapa3 from './components/Etapa3/Etapa3';
import Etapa4 from './components/Etapa4/Etapa4';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      etapa: "etapa1",
    };
  }

  onClickProximaEtapa2 = () => {
    this.setState({ etapa: "etapa2" });
  };

  onClickProximaEtapa3 = () => {
    this.setState({ etapa: "etapa3" });
  };

  onClickProximaEtapa4 = () => {
    this.setState({ etapa: "etapa4" });
  };

  render() {
    let etapa;
    switch(this.state.etapa){
      case "etapa1":
        etapa = (
          <div>
            <Etapa1/>
            <button onClick={this.onClickProximaEtapa2}> Próxima etapa </button>
          </div>
        )
      break;

      case "etapa2":
        etapa = (
          <div>
            <Etapa2/>
            <button onClick={this.onClickProximaEtapa3}> Próxima etapa </button>
          </div>
        )
      break;

      case "etapa3":
        etapa = (
          <div>
            <Etapa3/>
            <button onClick={this.onClickProximaEtapa4}> Próxima etapa </button>
          </div>
        )
      break;

      case "etapa4":
        etapa = (
          <Etapa4/>
        )
      break;

      default:
        etapa = (
          <h2> Erro! Etapa não reconhecida! </h2>
        )
    }

    return (
      <div className="App">
       {etapa}
      </div>
    );
  }
}

export default App;
