import React from "react";
import { List, Paper, Divider } from "@mui/material";
import Todo from "./Todo";

function TodoList({todos, removeTodo, toggleTodo}) {
    return (
        <Paper>
            <List>
                {todos.map(todo => (
                    <>
                     <Todo 
                        id={todo.id}
                        task={todo.task} 
                        key={todo.key} 
                        completed={todo.completed}
                        removeTodo={removeTodo}
                        toggleTodo={toggleTodo}
                    />
                    <Divider/>
                    </>  
                ))}
            </List>
        </Paper>
    )
}

export default TodoList;