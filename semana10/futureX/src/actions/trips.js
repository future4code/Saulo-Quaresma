import axios from 'axios';

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
