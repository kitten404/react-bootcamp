import React from "react";
import {ListItemText, ListItem, Checkbox, IconButton, ListItemSecondaryAction } from "@mui/material";
import { Delete, Edit } from "@mui/icons-material/";

function Todo({id, task, completed, removeTodo, toggleTodo}) {
    return(
        <ListItem>
            <Checkbox tabIndex={-1} checked={completed} onClick={() => toggleTodo(id)}/>
            <ListItemText style={{textDecoration: completed ? "line-through" : "none"}}>
                {task}
            </ListItemText>
            <ListItemSecondaryAction>
                <IconButton aria-label='Delete'onClick={() => removeTodo(id)}>
                    <Delete/>
                </IconButton>
                <IconButton aria-label='Edit'>
                    <Edit />
                </IconButton>
            </ListItemSecondaryAction>
        </ListItem> 
    )
}

export default Todo;