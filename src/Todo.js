import React, { useState } from 'react';
import { List, ListItem, ListItemAvatar, ListItemText } from '@mui/material'
import './Todo.css'
import { db } from './firebase'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { Modal, Button } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

// const useStyles = makeStyles((theme) => ({
//   paper: {
//     position: 'absolute',
//     width: 400,
//     backgroundColor: theme.palette.background.paper,
//     border: '2px solid #000',
//     boxShadow: theme.shadows[5],
//     padding: theme.spacing(2, 4, 3)
//   }
// }))

const Todo = (props) => {

  const [show, setShow] = useState(false)

  const handleOpen = () => setShow(true)

  const handleClose = () => setShow(false)

  const updateTodo = () => {
    setShow(false)
  }
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Heading Text</Modal.Title>
        </Modal.Header>
        <Modal.Body>Modal content will sit here</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>Close</Button>
          <Button variant="primary" onClick={handleClose}>Submit</Button>
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









