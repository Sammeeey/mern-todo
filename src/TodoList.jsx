// import './TodoList.css'

import { useState } from "react";
import NewTodoForm from "./NewTodoForm";
import Todo from "./Todo";

let uuid = () => crypto.randomUUID()
const loadLocal = () => JSON.parse(localStorage.getItem('TodoItems'))

function TodoList() {
    const [todos, setTodos] = useState(loadLocal() || [])

    const createTodo = (formTodo) => {
        console.log('formTodo', formTodo)
        return {id: uuid(), task: formTodo.todoTask, done: false}
    }

    const deleteTodo = (todoId) => {
        setTodos(prevTodos => {
            const updatedTodos = prevTodos.filter(todo => todoId !== todo.id)
            localStorage.setItem('TodoItems', JSON.stringify(updatedTodos))
            return updatedTodos
        })

    }

    const toggleTodo = (todoId) => {
        setTodos(prevTodos => {
            const updatedTodos = prevTodos.map(todo => todoId === todo.id ? {...todo, done: !todo.done } : todo)
            localStorage.setItem('TodoItems', JSON.stringify(updatedTodos))
            return updatedTodos
        })
    }

    return (
        <>
        {todos.map((todo) => <Todo thisTodo={todo} key={todo.id} {...{setTodos}} deleteTodo={() => deleteTodo(todo.id)} toggleTodo={() => toggleTodo(todo.id)} />)}
        <NewTodoForm {...{setTodos}} createTodo={(formTodo) => createTodo(formTodo)} />
        </>
    )
}

export default TodoList
