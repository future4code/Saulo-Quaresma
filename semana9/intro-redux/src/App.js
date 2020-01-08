import React from 'react';
import './App.css';
import AddTask from './components/AddTask/AddTask'
import TodoItem from './components/todos/TodoItem'
import Filters from './components/Filters/Filters'

function App() {
  return (
      <div className="App">
        <h1>4Task</h1>
        <div className="main-container">
          <AddTask />
          <TodoItem/>
          <Filters />
        </div>
      </div>
  );
}

export default App;
