// import './TodoList.css'

import { useState } from "react";
import NewTodoForm from "./NewTodoForm";
import Todo from "./Todo";

const dummyTodos = [{id: 'aoji-ajoai', task: 'dishes', done: false}, {id: 'ejii-wai', task: 'groceries', done: true}]

function TodoList() {
    const [todos, setTodos] = useState(dummyTodos)

    // console.log(todos[1])

    return (
        <>
        {todos.map((todo) => <Todo todo={todo} key={todo.id} />)}
        <NewTodoForm />
        </>
    )
}

export default TodoList
