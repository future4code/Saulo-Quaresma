import { setAllTasks, getCreatedTasks, createTask } from './tasks';
import axios from 'axios';

const tasksMock = [{
   text: "testando actions",
   id: 1,
   day: "sunday",
}]

describe("fetch all tasks", () => {
   test("should dispatch action with correct tasks from api", async () => {
      const dispatchMock = jest.fn()

      axios.get = jest.fn(() => {
         return {
            data: tasksMock
         }
      })

      await getCreatedTasks()(dispatchMock)

      expect(dispatchMock).toHaveBeenCalledWith(setAllTasks(tasksMock))
   });
})

describe("create tasks", () => {
   test("test if create tasks", async () => {
      const dispatchMock = jest.fn()

      axios.post = jest.fn().mockReturnValue({
         status: 200
      })

      await createTask("testando actions", 1, "sunday")(dispatchMock)

      expect(dispatchMock).toHaveBeenCalled()
   });
})

describe("set all tasks action", () => {
   test("action creator returns action correctly", () => {
      const expectedAction = {
         type: "SET_TASKS",
         payload: {
            allTasks: tasksMock
         }
      };

      const action = setAllTasks(tasksMock)

      expect(action).toEqual(expectedAction)
   });
})