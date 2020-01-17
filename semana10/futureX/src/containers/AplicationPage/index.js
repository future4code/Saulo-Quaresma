import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from "connected-react-router";
import { routes } from '../Router/index';

const appForm = [
   {      
      name: "name",
      type: "text",
      label: "Nome",
      required: true,
      pattern: "^[a-zA-Z]{3,}$",
   },
   {
      name: "age",
      type: "number",
      label: "Idade",
      required: true,
      pattern: "^{18,}$"
   },
   {     
      name: "applicationText",
      type: "text",
      label: "Porque sou um bom candidato(a)?",
      required: true,
      pattern: "^{30,}$",
   },
   {
      name: "profession",
      type: "text",
      label: "Profissão",
      required: true,
      pattern: "^{10,}$",
   }  
]

class AplicationPage extends Component {
   constructor(props) {
      super(props)
      this.state = {
         aplicationForm: [],
      }
   }

   handleInputChanges = event => {
      const { name, value } = event.target;
      this.setState({ aplicationForm: { ...this.state.aplicationForm, [name]: value } });
   }

   handleOnSubmit = event => {
      event.preventDefault();
      console.log(this.state.aplicationForm);
    };

   render() {
      return (
         <div>
            <h2>Formulário de Inscrição</h2>

            <form onSubmit={this.handleOnSubmit}>
               {appForm.map(input => (
                  <div key={input.name}>
                     <label htmlFor={input.name}>{input.label}: </label>
                     <input
                        id={input.name}
                        name={input.name}
                        type={input.type}
                        value={this.state.aplicationForm[input.name] || ""}
                        required={input.required}
                        onChange={this.handleInputChanges}
                        pattern={input.pattern}
                     />
                  </div>                                  
               ))}
               <label>Planeta: </label>
               <select >
                  <option value="">Planeta</option>
                  <option value="mercurio">Mercúrio</option>
                  <option value="venus">Vênus</option>
                  <option value="terra">Terra</option>
                  <option value="marte">Marte</option>
                  <option value="jupiter">Júpiter</option>
                  <option value="saturno">Saturno</option>
                  <option value="urano">Urano</option>
                  <option value="netuno">Netuno</option>
               </select>
               <button type="submit">Enviar</button>  
            </form>
            <button onClick={this.props.goToHomePage}>Voltar para Home</button>
            
         </div>
      )
   }
}


function mapDispatchToProps(dispatch) {
   return {
      goToHomePage: () => dispatch(push(routes.root))
   }
}

export default connect(null, mapDispatchToProps)(AplicationPage);