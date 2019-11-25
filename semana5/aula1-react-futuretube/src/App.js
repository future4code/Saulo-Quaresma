import React from 'react';
import './App.css';

function App() {
  return (
  <main className="App">
    <header className="header">
      <p>FutureTube</p>
      <form><input type="search" placeholder="Busca"></input></form>
    </header>

    <section>
      <div id="menu">
        <ul>
          <li><a href="">Início</a></li>
          <li><a href="">Em alta</a></li>
          <li><a href="">Inscrições</a></li>
          <li><a href="">Originais</a></li>
          <li><a href="">Biblioteca</a></li>
          <li><a href="">Histórioc</a></li>
        </ul>
      </div>
    </section>

    <aside id="container-images">
      <div className="item1">
        <img src="https://picsum.photos/id/1081/430/315" alt="foto-prédio"/>
        <p>Vida Urbana</p>
      </div>
      <div className="item1">
        <img src="https://picsum.photos/id/164/430/315" alt="rio-barcos"/>
        <p>Viagens Relaxantes</p>
      </div>
      <div className="item3">
        <img src="https://picsum.photos/id/396/430/315" alt="metrô"/>
        <p>Metrôs Limpos</p>
      </div>
      <div className="item4">
        <img src="https://picsum.photos/id/741/430/315" alt="vulcao"/>
        <p>Atividades Vulcânicas</p>
      </div>
      <div className="item5">
        <img src="https://picsum.photos/id/55/430/315" alt="mato-pedra"/>
        <p>Passeios Econômicos</p>
      </div>
      <div className="item6">
        <img src="https://picsum.photos/id/653/430/315" alt="praia"/>
        <p>Fim de Ano vem aí</p>
      </div>
      <div className="item7">
        <img src="https://picsum.photos/id/186/430/315" alt="trilha-árvores"/>
        <p>Neblina Densa</p>
      </div>
      <div className="item8">
        <img src="https://picsum.photos/id/349/430/315" alt="pessoa-muro"/>
        <p>Atividades ao ar livre</p>
      </div>
    </aside>
    
    <footer className="footer">
      <p>Oi, eu moro no footer!</p>
    </footer>
  
</main>);
}

export default App;
