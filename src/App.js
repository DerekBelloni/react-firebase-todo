import React, { useState, useEffect } from 'react';
import './App.css';
import { Button, FormControl, InputLabel, Input } from '@mui/material'
import Todo from "./Todo";
import { db } from './firebase'
import firebase from "firebase";

function App() {
  const [todos, setTodos] = useState([])
  const [input, setInput] = useState('')


  const addTodo = (event) => {
    event.preventDefault()
    db.collection('todos').add({
      text: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })

    setInput('')
  }

  useEffect(() => {
    db.collection('todos').orderBy('timestamp', 'desc').onSnapshot(snapshot => {
      console.log("grabbing snapshot from firebase", snapshot.docs.map(doc => doc.data()))
      setTodos(snapshot.docs.map(doc => doc.data().text))
    })
  }, [])

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
          <Todo
            text={todo}
          />
        ))}

      </ul>
    </div>
  );
}

export default App;
