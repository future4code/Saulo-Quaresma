import React from 'react'
import { connect } from 'react-redux';
import { push } from "connected-react-router";
import { routes } from '../Router/index';
import styled from 'styled-components';

const Header = styled.div`
  background: darkorange;
`;

const SiteName = styled.h1`
  color: white;
`;

// const LoginButton = styled.button`
//   border: none;
//   background: white;
//   border: 1px solid black;
//   border-radius: 10px;
//   color: black;
//   outline: none;
// `;

const HomePage = (props) => {
   return (
     <div>
        <Header>
          <SiteName>FutureX</SiteName>
          <button onClick={props.goToLoginPage}>Login</button>
        </Header>

        <p>Encontre as melhores viagens para você aqui!</p>

        <button onClick={props.goToListTripsPage}>Veja nossas viagens</button>
     </div>
   );
 }

 function mapDispatchToProps(dispatch) {
   return {
     goToLoginPage: () => dispatch(push(routes.login)),
     goToListTripsPage: () => dispatch(push(routes.listTrips))
   }
 }


 export default connect(null, mapDispatchToProps)(HomePage);