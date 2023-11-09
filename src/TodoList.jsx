// import './TodoList.css'

import { useState } from "react";
import NewTodoForm from "./NewTodoForm";
import Todo from "./Todo";

let uuid = () => crypto.randomUUID()

const dummyTodos = [{id: uuid(), task: 'dishes', done: false}, {id: uuid(), task: 'groceries', done: true}]

function TodoList() {
    const [todos, setTodos] = useState(dummyTodos)

    const createTodo = (formTodo) => {
        console.log('formTodo', formTodo)
        return {id: uuid(), task: formTodo.todoTask, done: false}
    }

    const deleteTodo = (todoId) => {
        setTodos(prevTodos => prevTodos.filter(todo => todoId === todo.id ? null : todo))
    }

    const toggleTodo = (todoId) => {
        setTodos(prevTodos => prevTodos.map(todo => todoId === todo.id ? {...todo, done: !todo.done } : todo))
    }

    return (
        <>
        {todos.map((todo) => <Todo thisTodo={todo} key={todo.id} {...{setTodos}} deleteTodo={() => deleteTodo(todo.id)} toggleTodo={() => toggleTodo(todo.id)} />)}
        <NewTodoForm {...{setTodos}} createTodo={(formTodo) => createTodo(formTodo)} />
        </>
    )
}

export default TodoList
