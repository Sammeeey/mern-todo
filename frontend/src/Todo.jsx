import './Todo.css'

function Todo({thisTodo, deleteTodo, toggleTodo}) {

    return (
        <>
        <div className={`todo ${thisTodo.done ? 'done' : 'active'}`} id={`todo-${thisTodo.id}`}>
            <input type="checkbox" name="task" id={`task-${thisTodo.id}`} onChange={toggleTodo} checked={thisTodo.done} />
            <span>{thisTodo.task}</span>
            <button type="button" onClick={deleteTodo}>&#10005;</button>
        </div>
        </>
    )
}

export default Todo
