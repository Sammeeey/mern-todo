const Todo = require('../models/todo')


const readTodos = async (req, res) => {
    const todos = await Todo.find({})

    if(!todos){
        return res.status(400).json({error: 'No todos'})
    }

    res.status(200).json(todos)
}


const readTodo = async (req, res) => {
    const {id: todoId} = req.params

    const todo = await Todo.findById(todoId)

    if(!todo){
        return res.status(400).json({error: 'No such todo'})
    }

    res.status(200).json(todo)
}


const createTodo = async (req, res) => {
    const {task} = req.body
    const todo = await Todo.create({task})
    res.status(200).json(todo)
}


const updateTodo = async (req, res) => {
    try {
        const {id: todoId} = req.params
        const todo = await Todo.findById(todoId);
    
        if (!todo) {
        return res.status(404).send('Todo not found');
        }
    
        // Toggle the 'done' field
        const updatedTodo = await Todo.findByIdAndUpdate(
        todoId,
        { $set: { done: !todo.done } },
        { new: true }
        );
    
        res.status(200).json(updatedTodo);
    } catch (error) {
        console.error('Error:', error);
        res.status(500).send('Internal Server Error');
    }      
}


const deleteTodo = async (req, res) => {
    try {
        const {id: todoId} = req.params
        const todo = await Todo.findById(todoId);
    
        if (!todo) {
        return res.status(404).send('Todo not found');
        }
    
        const deleteTodo = await Todo.findByIdAndDelete(todoId);
    
        res.status(200).json(deleteTodo);
    } catch (error) {
        console.error('Error:', error);
        res.status(500).send('Internal Server Error');
    }      
}




module.exports = {
    readTodos,
    readTodo,
    createTodo,
    updateTodo,
    deleteTodo,
}