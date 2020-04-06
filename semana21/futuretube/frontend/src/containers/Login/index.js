import React, { Component } from 'react';
import Logo from '../../logo.png';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import TypoGraphy from '@material-ui/core/Typography';
import NavBar from './navbar/index';

class Login extends Component {
   render() {
      return (
         <div>
            <AppBar color="primary" position="static">
               <Toolbar>
                  <TypoGraphy variant="title" color="inherit">
                     <img src={Logo} alt="logotipo"/>
                     <NavBar/>
                 </TypoGraphy>
               </Toolbar>
            </AppBar>
         </div>
      )
   }
}

export default Login;