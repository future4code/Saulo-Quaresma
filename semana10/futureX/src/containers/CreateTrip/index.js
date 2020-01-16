import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from "connected-react-router";
import { routes } from '../Router';

const creationForm = [
   {      
      name: "tripName",
      type: "text",
      label: "Nome",
      required: true,
      pattern: "^[a-zA-Z]{5,}$",
   },
   {
      name: "description",
      type: "text",
      label: "Descrição",
      required: true,
      pattern: "^[a-zA-Z]{30,}$"
   },
   {
      //^(0[1-9]|[12][0-9]|3[01])/(0[1-9]|1[012])/[12][0-9]{3}
      name: "data",
      type: "date",
      label: "Data",
      required: true,
      pattern: "",
   },
   {
      name: "durantion",
      type: "number",
      label: "Duração (dias)",
      required: true,
      pattern: "^.{50,}$"
   }  
]

class CreateTrip extends Component {
   constructor(props) {
      super(props)
      this.state = {
         form: {},
         selectPlanet: "Planeta",
      };
   }

   handleInputChanges = event => {
      const { name, value } = event.target;
      this.setState({ form: { ...this.state.form, [name]: value } });
   }

   handleOnSubmit = event => {
      event.preventDefault();
      console.log(this.state.form);
    };

   render() {
      return (
         <div>
            <h2>Criar viagens</h2>

            <form onSubmit={this.handleOnSubmit}>
               {creationForm.map(input => (
                  <div key={input.name}>
                     <label htmlFor={input.name}>{input.label}: </label>
                     <input
                        id={input.name}
                        name={input.name}
                        type={input.type}
                        value={this.state.form[input.name] || ""}
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

            <button onClick={this.props.goToTripsList}>Voltar para Home</button>
         </div>
      )
   }
}

function mapDispatchToProps(dispatch) {
   return {
      goToTripsList: () => dispatch(push(routes.listTrips)),
   }
}

export default connect(null, mapDispatchToProps)(CreateTrip);