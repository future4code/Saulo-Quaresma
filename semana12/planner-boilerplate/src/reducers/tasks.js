const initialState = {
   allTasks: [],
};

export const tasksReducer = (state = initialState, action) => {
   switch (action.type) {
      case "SET_TASKS":
         const newTask = action.payload.tasks
         return { ...state, allTasks: newTask };

      default:
         return state;
   };
};

export default tasksReducer;