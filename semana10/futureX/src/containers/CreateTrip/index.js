import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from "connected-react-router";
import { routes } from '../Router/index';

//https://us-central1-missao-newton.cloudfunctions.net/futureX/:aluno/trips

class CreateTrip extends Component {
   constructor(props) {
      super(props)
   }

   render() {
      return (
         <div>
            <h2>Criar viagens</h2>

            <form>
               <label />
               <input />

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