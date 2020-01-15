import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from "connected-react-router";
import { routes } from '../Router/index';
import { fetchAllTrips } from '../../actions/trips'

class ListTripsPage extends Component {
   constructor(props) {
      super(props)
   }

   componentDidMount() {
      this.props.getAllTrips()
   }

   render() {
      return (
         <div>
            <h2>Lista de Viagens</h2>

            {this.props.trips.map((trip) => <li>{trip.name}</li>)}

            <button onClick={this.props.goToHomePage}>Voltar para Home</button>
            <button onClick={this.props.goToCreateTripPage}>Criar viagem</button>
            <button onClick={this.props.goToTripsDetailsPage}>Ver candidatos</button>
         </div>
      )
   }
}

function mapStateToProps(state) {
   console.log(state)
   return {
      trips: state.trips.allTrips,
   }
}

function mapDispatchToProps(dispatch) {
   return {
      goToHomePage: () => dispatch(push(routes.root)),
      goToCreateTripPage: () => (dispatch(push(routes.createTrip))),
      goToTripsDetailsPage: () => dispatch(push(routes.detailsTrip)),
      getAllTrips: () => dispatch(fetchAllTrips())
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListTripsPage);