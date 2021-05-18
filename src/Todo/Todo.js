//rfce (React Functional Componet with an Export)
import { List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core'
import React from 'react'

function Todo(props) {
    return (
        <div>
            <List className="todo_list">
                <ListItem button>
                    <ListItemText primary={props.text} />
                </ListItem>
            </List>
       </div>
    )
}

export default Todo
