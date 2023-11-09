import './Todo.css'

function Todo({thisTodo, setTodos, deleteTodo}) {
    const handleChange = (e) => {
        e.target.checked && setTodos(prevTodos => prevTodos.map(todo => thisTodo.id === todo.id ? {...todo, done: true } : todo))
        !e.target.checked && setTodos(prevTodos => prevTodos.map(todo => thisTodo.id === todo.id ? {...todo, done: false } : todo))
    }

    return (
        <>
        <div className={`todo ${thisTodo.done ? 'done' : 'active'}`} id={`todo-${thisTodo.id}`}>
            <input type="checkbox" name="task" id={`task-${thisTodo.id}`} onChange={handleChange} checked={thisTodo.done} />
            <span>{thisTodo.task}</span>
            <button type="button" onClick={deleteTodo}>&#10005;</button>
        </div>
        </>
    )
}

export default Todo
