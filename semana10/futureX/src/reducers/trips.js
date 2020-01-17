const initialState = {
   allTrips: [],
   createTrip: [],
}

const trips = (state = initialState, action) => {
   switch(action.type) {
      case "GET_TRIPS":
         return {...state, allTrips: action.payload.trips}
      
      case "POST_TRIPS":
         return {...state, createTrip: action.payload.trips}
      default:
         return state
   }
}

export default trips;