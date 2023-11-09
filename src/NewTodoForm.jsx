// import './NewTodoForm.css'

function NewTodoForm() {

    return (
        <>
        <label htmlFor="todoTask" style={{ display: 'block' }}>New Todo:</label>
        <input type="text" name="todoTask" id="todoTask" placeholder="type task..." />
        <button type="submit">Add Task</button>
        </>
    )
}

export default NewTodoForm
