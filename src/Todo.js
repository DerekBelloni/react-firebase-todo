import React, { useState } from 'react';
import { List, ListItem, ListItemAvatar, ListItemText } from '@mui/material'
import './Todo.css'
import { db } from './firebase'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { Modal, Button } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';


const Todo = (props) => {
  const [input, setInput] = useState('')
  const [show, setShow] = useState(false)

  const handleOpen = () => setShow(true)

  const handleClose = () => setShow(false)

  const updateTodo = () => {
    db.collection('todos').doc(props.todo.id).set({
      text: input
    }, { merge: true })
    setShow(false)
  }
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Todo</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <input
            placeholder={props.todo.text}
            value={input}
            onChange={event => setInput(event.target.value)}
            type="text" />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>Close</Button>
          <Button variant="primary" onClick={updateTodo}>Submit</Button>
        </Modal.Footer>
        <Button
          className="btn btn-primary mb-4 m-4"
          onClick={e => setShow(false)}>Close</Button>
      </Modal>

      <List className="list">
        <ListItem>
          <ListItemAvatar>
          </ListItemAvatar>
          <ListItemText primary={props.todo.text} secondary="Dummy deadline" ></ListItemText>
        </ListItem>
        <Button
          className="btn btn-primary mb-4 m-2 mr-2"
          onClick={handleOpen}>Edit</Button>
        <DeleteForeverIcon className="delete_icon" onClick={event => { db.collection('todos').doc(props.todo.id).delete() }} />
      </List>
    </>
  );
}

export default Todo;









