import React from 'react'
import Footer from "./Footer";
import AddTodo from "./AddTodo";
import VisibleTodoList from "../containers/VisibleTodoList";

const TodoApp = () => {
    return (
        <div>
            <AddTodo/>
            <VisibleTodoList/>
            <Footer/>
        </div>
    )
}

export default TodoApp;