import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from "connected-react-router";
import { routes } from '../Router';

const creationForm = [
   {      
      name: "name",
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
      name: "date",
      type: "date",
      label: "Data",
      required: true,
      pattern: "",
   },
   {
      name: "durationInDays",
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
      };
   }

   handleInputChanges = event => {
      const { name, value } = event.target;
      this.setState({ form: { ...this.state.form, [name]: value } });
   }

   handleOnSubmit = event => {
      event.preventDefault();
      this.props.createTrip();     
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
               <label htmlFor="planet">Planeta: </label>
               <select id="planet" onChange={this.handleInputChanges} value={this.state.form.planet}>
                  <option value="">Planeta</option>
                  <option value="Mercúrio">Mercúrio</option>
                  <option value="Vênus">Vênus</option>
                  <option value="Terra">Terra</option>
                  <option value="Marte">Marte</option>
                  <option value="Júpiter">Júpiter</option>
                  <option value="Saturno">Saturno</option>
                  <option value="Urano">Urano</option>
                  <option value="Netuno">Netuno</option>
               </select>

               <button type="submit" onClick={this.handleOnSubmit}>Criar</button>
            </form>

            <button onClick={this.props.goToTripsList}>Voltar para Home</button>
         </div>
      )
   }
}

function mapDispatchToProps(dispatch) {
   return {
      goToTripsList: () => dispatch(push(routes.listTrips)),
      createTrip: (postTrip) => dispatch(push(postTrip))
   }
}

export default connect(null, mapDispatchToProps)(CreateTrip);