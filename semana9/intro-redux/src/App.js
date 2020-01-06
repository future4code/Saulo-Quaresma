import React from 'react';
import './App.css';
import AddTask from './components/AddTask/AddTask';
import TaskList from './components/TaskList/TaskList'
import TaskFilters from './components/TaskFilters/TaskFilters';
import MarkTaskCompleted from './components/MarkTaskCompleted/MarkTaskCompleted';
import DeleteMarkedTasks from './components/DeleteMarkedTasks/DeleteMarkedTasks';

//Possíveis actions creator para o projeto //
const addTaskActionCreator = () => {
  return {
    type: "ADD_TASK",
  }
}

const removeTaskActionCreator = () => {
  return {
    type: "REMOVE_TASK",
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

function App() {
  return (
    <div className="App">
      <h1>4Task</h1>
      <div className="main-container">
        <AddTask/>        
        <TaskFilters/>
        <TaskList/>
        <MarkTaskCompleted/>
        <DeleteMarkedTasks/>
      </div>
    </div>
  );
}

export default App;
