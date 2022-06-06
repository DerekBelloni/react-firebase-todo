import React from 'react';
import { Avatar, List, ListItem, ListItemAvatar, ListItemText } from '@mui/material'
import './Todo.css'

const Todo = (props) => {
  return (
    <List>
      <ListItem>
        <ListItemAvatar>
        </ListItemAvatar>
        <ListItemText primary={props.text} secondary="Dummy deadline" ></ListItemText>
      </ListItem>

    </List>
  );
}

export default Todo;


