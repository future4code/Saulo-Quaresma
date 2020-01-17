import axios from 'axios';

// criar viagens = https://us-central1-missao-newton.cloudfunctions.net/futureX/:aluno/trips

const baseURL = "https://us-central1-missao-newton.cloudfunctions.net/futureX/saulo"

const getAllTripsAction = (trips) => {
   return {
      type: "GET_TRIPS",
      payload: {
         trips,
      }
   }
}

export const fetchAllTrips = () => async (dispatch) => {
   const response = await axios.get(`${baseURL}/trips`)
   dispatch(getAllTripsAction(response.data.trips))
}


const postTripCreatedAction = (name, description, planet, durationInDays, date) => {   
   return {
      type: "POST_TRIPS",
      payload: {
        name,
        description,
        planet,
        durationInDays,
        date,
      }
   }
}

export const postCreatedTrip = () => async (dispatch) => {
   const response = await axios.post(`${baseURL}/trips`)
   //dispatch(postTripCreatedAction(response.data.name, description, planet, durationInDays, date))
}