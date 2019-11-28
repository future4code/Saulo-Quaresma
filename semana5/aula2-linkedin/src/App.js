import React from 'react';
import './App.css';
import BigCard from './components/BigCard/BigCard';
import SmallCard from './components/SmallCard/SmallCard'
import ImageButton from './components/ImageButton/ImageButton'
import PageSection from './components/PageSection/PageSection'

function App() {
  return (
    <div className="App">      
      <PageSection titulo="Dados Pessoais">
        <BigCard imagem="https://picsum.photos/id/1041/430/315" titulo="Saulo Quaresma" texto="Olá, eu sou o Saulo. Sou estudante de Desenvolvimento em Web Full Stack."/>
        <SmallCard email="sauloquaresma@gmail.com" endereco="Rua Penha /SC, 644 "/>
        <ImageButton nomeBotao="Ver mais" image="https://image.flaticon.com/icons/svg/32/32195.svg"/>
      </PageSection>

      <PageSection titulo="Experiências profissionais">
        <BigCard imagem="https://picsum.photos/id/236/430/315" titulo="Anónimos SA" texto="Escola dos desempregados!"/>
        <BigCard imagem="https://picsum.photos/id/28/430/315" titulo="Esperançóide" texto="Empresa dos futuros empregados!"/>
      </PageSection>

      <PageSection titulo="Minha redes sociais">
        <ImageButton nomeBotao="Facebook" image="https://image.flaticon.com/icons/svg/124/124010.svg"/>
      </PageSection>         
    </div>
  );
}

export default App;
