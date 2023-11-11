const Todo = require('../models/todo')


const getTodos = async (req, res) => {
    const todos = await Todo.find({})
    res.status(200).json(todos)
}


module.exports = {
    getTodos,
}