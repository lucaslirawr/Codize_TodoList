import React, { useState } from 'react';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([
    { id: 1, text: 'Lucas', completed: false },
    { id: 2, text: 'Couto', completed: false },
    { id: 3, text: 'Lira', completed: false },
    
  ]);

  const Task = (id) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

 
  const [newTask, setNewTask] = useState('');


  return (
    <div className="app">
      
      <ul>
        {tasks.map(task => (
          <li key={task.id} className={task.completed ? 'completed' : ''}>
            <label>
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => Task(task.id)}
              />
              {task.text}
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
