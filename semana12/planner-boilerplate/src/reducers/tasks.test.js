import tasksReducer from './tasks';
import { setAllTasks } from '../actions/tasks';

describe("Testing tasksReducer", () => {
   test("tests set tasks", () => {
      const currentState = {
         allTasks: []
      };

      const action = setAllTasks(["Assistir palestra"])

      const newState = tasksReducer(currentState, action)

      expect(newState.allTasks).toHaveLength(1)
      expect(newState.allTasks).toEqual(["Assistir palestra"])
   });
})