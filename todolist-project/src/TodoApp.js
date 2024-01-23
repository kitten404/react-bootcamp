import React, {useState} from "react";
import { Typography } from "@mui/material";
import { Paper } from "@mui/material";
import { AppBar } from "@mui/material";
import { Toolbar } from "@mui/material";
import { Grid } from "@mui/material";
import TodoList from "./TodoList";
import TodoForm from "./TodoForm";
import { v4 as uuidv4 } from 'uuid';

function TodoApp() {
    const initialTodos = [
        {id: 1, task: "Clean FishTank", completed: false },
        {id: 2, task: "Feed Cats", completed: true },
    ]
    const [todos, setTodos] = useState(initialTodos);
    const addTodo = newTodoText => {
        setTodos([...todos, {id: uuidv4(), task: newTodoText, completed: false}]);
    }
    const removeTodo = todoId => {
        const updatedTodos = todos.filter(todo => todo.id !== todoId);
        setTodos(updatedTodos);
    }
    const toggleTodo = todoId => {
        const updatedTodos = todos.map( todo =>
            todo.id === todoId ? {...todo, completed: !todo.completed} : todo
        );
        setTodos(updatedTodos);
    }
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
                        <TodoList todos={todos} removeTodo={removeTodo} toggleTodo={toggleTodo}/>
                    </Grid>
                </Grid>
            </AppBar>
        </Paper>
    )
}

export default TodoApp;