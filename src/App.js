import React, { useState, useEffect } from 'react';
import './App.css';
import { Button, FormControl, InputLabel, Input } from '@mui/material'

function App() {
  const [todos, setTodos] = useState(['Go to gym', 'Wash the car', 'Keep learning React'])
  const [input, setInput] = useState('')


  const addTodo = (event) => {
    event.preventDefault()
    console.log('the input is:', input)
    setTodos(prevTodos => [
      ...prevTodos,
      input
    ])
    setInput('')
  }




  return (
    <div className="App">

      <h1>Hello World!</h1>
      <form
        className="todo_form"
        onSubmit={addTodo}>
        <FormControl>
          <InputLabel>✅ Write a Todo</InputLabel>
          <Input
            className="todo_input"
            value={input}
            onChange={event => setInput(event.target.value)}
          />
        </FormControl>
        <Button disabled={!input} type="submit" onClick={addTodo} variant="contained">Add Todo</Button>

      </form>
      <ul>
        {todos.map(todo => (
          <li>{todo}</li>
        ))}

      </ul>
    </div>
  );
}

export default App;
