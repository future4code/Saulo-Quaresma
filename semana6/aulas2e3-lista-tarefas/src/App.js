import React from 'react';
import './App.css';
import AdicionarTarefa from './components/AdicionarTarefa/AdicionarTarefa'
import styled from 'styled-components'

const CorpoPagina = styled.div`
   background: #725b53;
`

const EstiloTitulo = styled.h1`
   color: white;
   text-shadow: 1px 3px black;
`

function App() {
  return (
    <CorpoPagina className="App">

      <EstiloTitulo> Lista de Tarefas </EstiloTitulo>
      <AdicionarTarefa/>

    </CorpoPagina>
  );
}

export default App;
