import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from "connected-react-router";
import { routes } from '../Router/index';
import { fetchAllTrips } from '../../actions/trips'
import styled from 'styled-components';

const TripsContainer = styled.div`
   display: flex;
   justify-content: center;
`

const TripCard = styled.div`
   border: 1px solid black;
   padding: 10px 15px;
   margin: 15px;
   width: 20%;
`

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
            <TripsContainer>
               {this.props.trips.map((trip) => 
                  <TripCard>
                     <p><b>Nome da Viagem: </b>{trip.name}</p>
                     <p><b>Descrição: </b>{trip.description}</p>
                     <p><b>Planeta de destino: </b>{trip.planet}</p>
                     <p><b>Duração em dias: </b>{trip.durationInDays}</p>
                     <button>Ver Inscrições</button>
                  </TripCard>
               )}
            </TripsContainer>

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