import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [todos, setTodos] = useState(['Go to gym', 'Wash the car', 'Keep learning React'])
  const [input, setInput] = useState('')


  const addTodo = (event) => {
    console.log('the input is:', input)
    setTodos(prevTodos => [
      ...prevTodos,
      input
    ])
  }




  return (
    <div className="App">

      <h1>Hello World!</h1>
      <input
        value={input}
        onChange={event => setInput(event.target.value)}
      />
      <button onClick={addTodo}>Add Todo</button>
      <ul>
        {todos.map(todo => (
          <li>{todo}</li>
        ))}

      </ul>
    </div>
  );
}

export default App;
