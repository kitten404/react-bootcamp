import React from "react";
import { List, Paper, Divider } from "@mui/material";
import Todo from "./Todo";

function TodoList({todos, removeTodo, toggleTodo, editTodo}) {
    if(todos.length)
        return (
            <Paper>
                <List>
                    {todos.map(todo => (
                        <>
                        <Todo 
                            {...todo}
                            key={todo.id} 
                            removeTodo={removeTodo}
                            toggleTodo={toggleTodo}
                            editTodo={editTodo}
                        />
                        <Divider/>
                        </>  
                    ))}
                </List>
            </Paper>
        );
    return null;
}

export default TodoList;