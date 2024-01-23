import React from "react";
import EditTodoForm from "./EditTodoForm";
import useToggleState from "./hooks/useToggleState";
import {ListItemText, ListItem, Checkbox, IconButton, ListItemSecondaryAction } from "@mui/material";
import { Delete, Edit } from "@mui/icons-material/";

function Todo({id, task, completed, removeTodo, toggleTodo, editTodo}) {
    const [isEditing, toggle] = useToggleState(false);
    return(
        <ListItem>
            {isEditing ? ( <EditTodoForm editTodo={editTodo} id={id} task={task} toggleEditForm={toggle}/>  ) : (
            <>
                <Checkbox tabIndex={-1} checked={completed} onClick={() => toggleTodo(id)}/>
                <ListItemText style={{textDecoration: completed ? "line-through" : "none"}}>
                    {task}
                </ListItemText>
                <ListItemSecondaryAction>
                    <IconButton aria-label='Delete'onClick={() => removeTodo(id)}>
                        <Delete/>
                    </IconButton>
                    <IconButton aria-label='Edit' onClick={toggle}>
                        <Edit />
                    </IconButton>
                </ListItemSecondaryAction>
                
            </>
            )}
        </ListItem> 
    )
}

export default Todo;