// import './TodoList.css'

import { useEffect, useState } from "react";
import NewTodoForm from "./NewTodoForm";
import Todo from "./Todo";

let uuid = () => crypto.randomUUID()

function TodoList() {
    const [todos, setTodos] = useState([])

    useEffect(() => {
        const getTodos = async () => {
            try {
                const dbTodos = await fetch(`${import.meta.env.VITE_API_BASE_URL}/api/todos`)
                console.log('dbTodos', dbTodos)
                const jsonTodos = await dbTodos.json()
                console.log('jsonTodos', jsonTodos)
        
                if (dbTodos.ok){
                    setTodos(jsonTodos)  
                }
            } catch (error) {
                console.error(error)
            }
        };        
        getTodos()
    }, [])

    const createTodo = async (formTodo) => {
        try {
              const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/api/todos`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({task: formTodo.todoTask})
            })
            const data = await response.json()
    
            if (response.ok) {
                setTodos(prevTodos => {
                    const updatedTodos = [...prevTodos, data];
                    return updatedTodos
                })
            }
        } catch (err) {
            console.error(err)
        }
    }

    const deleteTodo = async (todoId) => {
        try {
            const delTodo = await fetch(`${import.meta.env.VITE_API_BASE_URL}/api/todos/${todoId}`, {
                method: "DELETE",
            })
            const data = await delTodo.json()

            if (delTodo.ok) {
                setTodos(prevTodos => {
                    const updatedTodos = prevTodos.filter(todo => todoId !== todo._id)
                    return updatedTodos
                })
            }
        } catch (err) {
            console.error(err)
        }
    }

    const toggleTodo = (todoId) => {
        setTodos(prevTodos => {
            const updatedTodos = prevTodos.map(todo => todoId === todo._id ? {...todo, done: !todo.done } : todo)
            localStorage.setItem('TodoItems', JSON.stringify(updatedTodos))
            return updatedTodos
        })
    }

    return (
        <>
        {todos.map((todo) => <Todo thisTodo={todo} key={todo._id} {...{setTodos}} deleteTodo={() => deleteTodo(todo._id)} toggleTodo={() => toggleTodo(todo._id)} />)}
        <NewTodoForm {...{setTodos}} createTodo={(formTodo) => createTodo(formTodo)} />
        </>
    )
}

export default TodoList
