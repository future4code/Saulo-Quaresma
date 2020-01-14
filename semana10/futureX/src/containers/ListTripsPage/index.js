import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from "connected-react-router";
import { routes } from '../Router/index';

class ListTripsPage extends Component {
   constructor(props) {
      super(props)
   }

   render() {
      return (
         <div>
            <p>Lista de Viagens</p>
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

export default connect(null, mapDispatchToProps)(ListTripsPage);