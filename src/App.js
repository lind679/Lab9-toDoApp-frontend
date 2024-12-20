import './App.css';
import React, { useState, useEffect } from 'react';
import CreateTask from './components/CreateTask';
import FetchTasks from './components/FetchTasks';
import UpdateTasks from './components/UpdateTasks';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>To-Do List</h1>
        <CreateTask />
        <FetchTasks />
        <UpdateTasks />
      </header>
    </div>
  );
}

export default App;
