import React, { useState } from 'react';
import { Button, List, ListItem, ListItemAvatar, ListItemText, Modal } from '@mui/material'
import './Todo.css'
import { db } from './firebase'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';


const Todo = (props) => {
  const [open, setOpen] = useState(false)

  const handleOpen = () => {
    setOpen(true);
  }

  const handleClose = () => {
    setOpen(false);
  }
  return (
    <>
      <Modal
        open={open}
        onClose={e => setOpen(false)}
      >
        <div>
          <h1>open</h1>
          <button onClick={e => setOpen(false)}>Close</button>
        </div>
      </Modal>
      <List>
        <ListItem>
          <ListItemAvatar>
          </ListItemAvatar>
          <ListItemText primary={props.todo.text} secondary="Dummy deadline" ></ListItemText>
        </ListItem>
        <button onClick={e => setOpen(true)}>Edit</button>
        <DeleteForeverIcon onClick={event => { db.collection('todos').doc(props.todo.id).delete() }} />
      </List>
    </>
  );
}

export default Todo;


