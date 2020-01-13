import React from 'react'
import styled from 'styled-components';

const Header = styled.div`
  background: darkorange;
`;

const SiteName = styled.h1`
  color: white;
`;

const LoginButton = styled.button`
  border: none;
  background: white;
  border: 1px solid black;
  border-radius: 10px;
  color: black;
  outline: none;
`;

function HomePage() {
   return (
     <div>
        <Header>
          <SiteName>FutureX</SiteName>
          <LoginButton>Login</LoginButton>
        </Header>

        <p>Encontre as melhores viagens para você aqui!</p>

        <button>Veja nossas viagens</button>
     </div>
   );
 }

 export default HomePage;