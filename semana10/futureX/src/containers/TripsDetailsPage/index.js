import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from "connected-react-router";
import { routes } from '../Router/index';

class TripsDetailsPage extends Component {
   constructor(props) {
      super(props)
   }

   render() {
      return (
         <div>
            <p>Detalhes de Viagens</p>
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

export default connect(null, mapDispatchToProps)(TripsDetailsPage);