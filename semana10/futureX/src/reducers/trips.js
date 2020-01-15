const initialState = {
   allTrips: [],
}

const trips = (state = initialState, action) => {
   switch(action.type) {
      case "GET_TRIPS":
         return {...state, allTrips: action.payload.trips}
      default:
         return state
   }
}

export default trips;