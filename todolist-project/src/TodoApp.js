import React, {useEffect} from "react";
import useTodoState from "./hooks/useTodoState";
import useLocalStorageState from "./hooks/useLocalStorageState";
import { Typography } from "@mui/material";
import { Paper } from "@mui/material";
import { AppBar } from "@mui/material";
import { Toolbar } from "@mui/material";
import { Grid } from "@mui/material";
import TodoList from "./TodoList";
import TodoForm from "./TodoForm";

function TodoApp() {
    const initalTodos = [{}];
    var {todos, addTodo, removeTodo, toggleTodo, editTodo} = useTodoState(initalTodos);
    /*useLocalStorageState("todos", []);
    const initialTodos = JSON.parse(window.localStorage.getItem("todos") || "[]");
    
     useEffect(() => {
        window.localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos]); */

    return (
        <Paper style={{
            padding: 0,
            margin: 0,
            height: "100vh",
            backgroundColor: "#fafafa"
        }}
        elevation={0}
        >
            <AppBar color='primary' position='static' style={{height: "64px"}}>
                <Toolbar>
                    <Typography color='inherit'>TODO WITH HOOKS</Typography>
                </Toolbar>
                <Grid container justifyContent='center' style={{marginTop: "1rem"}}>
                    <Grid item xs={11} md={8} lg={4}>
                        <TodoForm addTodo={addTodo}/>
                        <TodoList 
                            todos={todos} 
                            removeTodo={removeTodo} 
                            toggleTodo={toggleTodo}
                            editTodo={editTodo}
                        />
                    </Grid>
                </Grid>
            </AppBar>
        </Paper>
    )
}

export default TodoApp;