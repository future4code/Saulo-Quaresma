//Possíveis actions creator para o projeto //
const addTaskAction = newTask => {
  return {
    type: "ADD_TASK",
    payload: {
      newTask: newTask,
    }
  }
}

const removeTaskActionCreator = () => {
  return {
    type: "REMOVE_TASK",
    payload: {
    }
  }
}

const filterTaskByCompletedActionCreator = () => {
  return {
    type: "COMPLETED_TASK",
  }
}

const filterTaskByPendingActionCreator = () => {
  return {
    type: "PENDING_TASK",
  }
}

const markTaskAsCompletedActionCreator = () => {
  return {
    type: "MARKCOMPLETED_TASK",
  }
}

const removeMarkedTaskAsCompletedActionCreator = () => {
  return {
    type: "REMOVECOMPLETED_TASK",
  }
}
  //Fim das possíveis actions creator //