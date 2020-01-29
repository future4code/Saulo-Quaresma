const initialState = {
      allTasks: [],
}

const tasksReducer = (state = initialState, action) => {
   switch(action.type) {
      case "SET_TASKS":
         const taskList = action.payload.allTasks
         return { ...state, allTasks: taskList};
      
      default:
         return state;
   };
}