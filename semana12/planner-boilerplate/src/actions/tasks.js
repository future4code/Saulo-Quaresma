import axios from 'axios';

export const baseURL = "https://us-central1-missao-newton.cloudfunctions.net/generic"

// action-creator para tasks

export const setAllTasks = (allTasks) => ({
   type: "SET_TASKS",
   payload: {
      allTasks,
   }
})

// pegar as tarefas criadas

export const getCreatedTasks = () => async (dispatch) => {
   try {
      const response = await axios.get(`${baseURL}/planner-bouman-saulo`)
      dispatch(setAllTasks(response.data))
   } catch (error) {
      window.alert("Erro ao buscar as tarefas.")
   }
}

// cria uma nova tarefa

export const createTask = (text, day) => async (dispatch) => {
   const taskInfo = {
      text,
      day,
   }

   try {
      await axios.post(`${baseURL}/planner-bouman-saulo`, taskInfo)
      dispatch(getCreatedTasks())
   } catch (error) {
      window.alert("Erro ao criar tarefa.")
   }
}