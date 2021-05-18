//rfce (React Functional Componet with an Export)
import { Avatar, Button, IconButton, Input, List, ListItem, ListItemAvatar, ListItemIcon, ListItemSecondaryAction, ListItemText, makeStyles, Modal } from '@material-ui/core'
import React, { useState } from 'react'
import db from '../firebase/firebase'
import FolderIcon from '@material-ui/icons/Folder'
import DeleteIcon from '@material-ui/icons/Delete'
import EditIcon from '@material-ui/icons/Edit';

const UseStyles = makeStyles((theme) => ({
    paper:{
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        position: 'absolute',
        width: 400,
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    }
}))

function Todo(props) {
    const classes = UseStyles();
    const [open, setOpen] = useState(false);
    const [input, setInput] = useState(props.todo.todo);

    const handleOpen = () =>{
        setOpen(true);
    }

    //updating Todo
    const updateTodo = () => {
        db.collection('todos').doc(props.todo.id).set({
            todo: input
        }, {merge:true});
        setOpen(false);
    }

    return (
        <div>
            <Modal
                open={open}
                onClose={e => setOpen(false)}
                >
                    <div className={classes.paper}>
                        <h4>Update</h4>
                        <Input value={input} onChange={event => setInput(event.target.value)} />
                        <Button disabled={!input} variant="contained" color="primary" onClick={updateTodo}>Update</Button>
                    </div>
                
            </Modal>


            <List className="todo_list">
                <ListItem>
                  <ListItemAvatar>
                    <Avatar>
                      <FolderIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary={props.todo.todo}
                    secondary="Todo"
                  />
                  <ListItemSecondaryAction>
                    <IconButton edge="end" aria-label="delete" onClick={e => setOpen(true)}>
                      <EditIcon />
                    </IconButton>
                    <IconButton edge="end" aria-label="delete" onClick={event => db.collection('todos').doc(props.todo.id).delete()}>
                      <DeleteIcon />
                    </IconButton>
                  </ListItemSecondaryAction>
                </ListItem>
            </List>
       </div>
    )
}

export default Todo
