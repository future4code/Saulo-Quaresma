import React, { Component } from 'react';
import Logo from '../../logodark.png';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import { connect } from "react-redux";
import { push } from "connected-react-router";
import { routes } from "../Router";
import { login } from '../../actions/users'
import { TextField, Button } from '@material-ui/core';
import styled from 'styled-components';

class LoginPage extends Component {
   constructor(props) {
      super(props);
      this.state = {
         email: "",
         password: ""
      }
   };

   handleChange = (event) => {
      this.setState({
         [event.target.name]: event.target.value
      })
   };

   handleSubmit = (event) => {
      event.preventDefault();
      const { email, password } = this.state;
      this.props.login(email, password);
   };

   render() {
      const { goToSignUpPage } = this.props;
      const { email, password } = this.state;

      return (
         <main>
            <Section>
               <Form>
                  <img src={Logo} alt="logo" />
                  <StyledField theme={theme}
                     onChange={this.handleChange}
                     name="email"
                     type="email"
                     value={email}
                     variant="outlined"
                     placeholder="Email"
                     color="secondary"
                  />

                  <StyledField
                     onChange={this.handleChange}
                     name="password"
                     type="password"
                     value={password}
                     variant="outlined"
                     placeholder="Password"
                     color="secondary"
                  />

                  <ThemeProvider theme={theme}>
                     <StyledButton onSubmit={this.handleSubmit} color="secondary" variant="contained">Sign in</StyledButton>
                     <StyledButton onClick={goToSignUpPage} color="secondary" variant="contained">Sign up</StyledButton>
                  </ThemeProvider>
               </Form>
            </Section>
         </main>
      )
   }
}

const mapDispatchToProps = dispatch => ({
   login: (email, password) => dispatch(login(email, password)),
   goToSignUpPage: () => dispatch(push(routes.signUpPage)),
})

export default connect(null, mapDispatchToProps)(LoginPage);

const theme = createMuiTheme({
   palette: {
      primary: {
         main: "#3700B3",
      },
      secondary: {
         main: "#03DAC5"
      }
   }
})

const Section = styled.section`
   width: 50rem;
   height: 30rem;
   background-color: #FFFF;
   border-radius: 30px;
   justify-content: center;
   margin: auto;
`

const Form = styled.form`
   margin-top: 20%;
   padding: 10%;
   text-align: center;
`

const StyledField = styled(TextField)`
  && {
     display: flex;
     flex-direction: column;
     margin: 30px;
     padding-left: 130px;
     max-width: 300px;
     text-align: center;
  }
`

const StyledButton = styled(Button)`
   && {
      width: 200px;
      padding: 10px;
      margin: 0 20px;
      font-weight: bold;
   } 
`