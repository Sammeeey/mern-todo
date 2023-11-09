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

    // console.log(todos[1])

    return (
        <>
        {todos.map((todo) => <Todo thisTodo={todo} key={todo.id} {...{setTodos}} />)}
        <NewTodoForm {...{setTodos}} createTodo={(formTodo) => createTodo(formTodo)} />
        </>
    )
}

export default TodoList
