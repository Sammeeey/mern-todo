const express = require('express')
const router = express.Router()
const { readTodos, readTodo, createTodo, updateTodo, deleteTodo } = require('../controllers/todo');


// read all todos
router.get('/', readTodos)

// read single todo
router.get('/:id', readTodo)

// create todo
router.post('/', createTodo)

// check off todo
router.put('/:id', updateTodo)

// delete todo
router.delete('/:id', deleteTodo)


module.exports = router