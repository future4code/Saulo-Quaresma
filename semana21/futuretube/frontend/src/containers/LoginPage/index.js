import React, { Component } from 'react';
import Footer from '../../components/Footer';
import { connect } from "react-redux";
import { push } from "connected-react-router";
import { routes } from "../Router";
import { login } from '../../actions/users'
import { TextField } from '@material-ui/core';

class LoginPage extends Component {
   constructor(props) {
      super(props);
      this.state = {
         email: "",
         password: ""
      }
   };

   handleChange = event => {
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

      return (
         <main>
            <section className="main-container">
               <form onSubmit={this.handleSubmit}>
                  <h3>Login</h3>
                  <TextField
                     color="primary"
                     onChange={this.handleChange}
                     name="email"
                     type="email"
                     label="Email"
                     required
                     variant="outlined"
                  />

                  <TextField
                     color="primary"
                     onChange={this.handleChange}
                     name="password"
                     type="password"
                     label="Password"
                     required
                     variant="outlined"
                  />
                  <button type="submit">Sign in</button>
                  <span>New user?<button onClick={goToSignUpPage}>Sign up</button></span>
               </form>
            </section>
            <Footer />
         </main>
      )
   }
}

const mapDispatchToProps = dispatch => ({
   login: (email, password) => dispatch(login(email, password)),
   goToSignUpPage: () => dispatch(push(routes.signUpPage)),
})

export default connect(null, mapDispatchToProps)(LoginPage);