// import './Todo.css'

function Todo({todo}) {

    return (
        <>
        <div>
            <span>{todo.task}</span>
            <button type="button">&#10005;</button>
        </div>
        </>
    )
}

export default Todo
