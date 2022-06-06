import React from 'react';
import { Button, List, ListItem, ListItemAvatar, ListItemText } from '@mui/material'
import './Todo.css'
import { db } from './firebase'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';


const Todo = (props) => {
  return (
    <List>
      <ListItem>
        <ListItemAvatar>
        </ListItemAvatar>
        <ListItemText primary={props.todo.text} secondary="Dummy deadline" ></ListItemText>
      </ListItem>
      <DeleteForeverIcon onClick={event => { db.collection('todos').doc(props.todo.id).delete() }} />
    </List>
  );
}

export default Todo;


