import React, { useState } from 'react';
import './App.css';

function App() {
  const [todos, setTodos] = useState(['Go to gym', 'Wash the car', 'Keep learning React'])




  return (
    <div className="App">

      <h1>Hello World!</h1>
      <input />
      <button>Add Todo</button>
      <ul>
        {todos.map(todo => (
          <li>{todo}</li>
        ))}

      </ul>
    </div>
  );
}

export default App;
