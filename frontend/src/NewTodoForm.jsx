// import './NewTodoForm.css'

import { useForm } from "react-hook-form"

function NewTodoForm({setTodos, createTodo}) {
    const {
        register,
        handleSubmit,
        watch,
        reset,
    } = useForm({
        defaultValues: {
            todoTask: '',
        }
    })

    const onSubmit = (data) => {
        const newTodo = createTodo(data)
        reset()
    }

    // console.log(watch('todoTask'))

    return (
        <>
        <form onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor="todoTask" style={{ display: 'block' }}>New Todo:</label>
            <input type="text" id="todoTask" placeholder="type task..." {...register('todoTask')} />
            <button type="submit">Add Task</button>
        </form>
        </>
    )
}

export default NewTodoForm
