require('dotenv').config()
const express = require('express')
const app = express()
const path = require('path')
const mongoose = require('mongoose');
const morgan = require('morgan')
const port = process.env.PORT || 8080

const Todo = require('./models/Todo')


app.use(express.static(path.join(__dirname, 'public')))
app.use(express.json())
app.use(morgan('dev'))



main().then(() => {console.log('index.js connected to mongoose')}).catch(err => console.log(err));

async function main() {
    await mongoose.connect(process.env.MONGO_URI);
    // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}


// read all todos
app.get('/', async (req, res) => {
    const todos = await Todo.find({})
    res.status(200).json(todos)
})

// read single todo
app.get('/:id', async (req, res) => {
    const {id: todoId} = req.params

    const todo = await Todo.findById(todoId)
    res.status(200).json(todo)
})

// create todo
app.post('/', async (req, res) => {
    const {task} = req.body
    const todo = await Todo.create({task})
})

// check off todo
app.put('/:id', async (req, res) => {
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
        console.error('Error toggling todo:', error);
        res.status(500).send('Internal Server Error');
    }      
})

// delete todo
app.delete('/:id', async (req, res) => {
    try {
        const {id: todoId} = req.params
        const todo = await Todo.findById(todoId);
    
        if (!todo) {
        return res.status(404).send('Todo not found');
        }
    
        const deleteTodo = await Todo.findByIdAndDelete(todoId);
    
        res.status(200).json(deleteTodo);
    } catch (error) {
        console.error('Error toggling todo:', error);
        res.status(500).send('Internal Server Error');
    }      
})





app.use((req, res, next) => {
    res.status(404).send("Sorry can't find that!")
  })


app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})