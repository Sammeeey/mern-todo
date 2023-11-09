// import './Todo.css'

function Todo({thisTodo, setTodos}) {
    const deleteTodo = (e) => {
        setTodos(prevTodos => prevTodos.filter(todo => thisTodo.id === todo.id ? null : todo))
    }

    return (
        <>
        <div className="todo" id={`todo-${thisTodo.id}`}>
            <span>{thisTodo.task}</span>
            <button type="button" onClick={(e) => deleteTodo(e)}>&#10005;</button>
        </div>
        </>
    )
}

export default Todo
