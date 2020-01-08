const addTaskAction = (newTask) => {
  return {
    type: "ADD_TASK",
    payload: {
      newTask: newTask,      
    }
  }
}

const removeTaskActionCreator = (id) => {
  return {
    type: "REMOVE_TASK",
    payload: {
      id: id,
    }
  }
}

const filterTaskByCompletedActionCreator = () => {
  return {
    type: "COMPLETED_TASK",
    payload: {

    }
  }
}

const filterTaskByPendingActionCreator = () => {
  return {
    type: "PENDING_TASK",
    payload: {

    }
  }
}

const markTaskAsCompletedActionCreator = (id) => {
  return {
    type: "MARKCOMPLETED_TASK",
    payload: {
      id: id,
    }
  }
}

const removeMarkedTaskAsCompletedActionCreator = () => {
  return {
    type: "REMOVECOMPLETED_TASK",
    payload: {

    }
  }
}