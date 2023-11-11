require('dotenv').config()
const express = require('express')
const app = express()
const path = require('path')
const mongoose = require('mongoose');
const morgan = require('morgan');
const { readTodos, readTodo, createTodo, updateTodo, deleteTodo } = require('./controllers/todo');
const todoRoutes = require('./routes/todo')
const port = process.env.PORT || 8080


app.use(express.static(path.join(__dirname, 'public')))
app.use(express.json())
app.use(morgan('dev'))



main().then(() => {console.log('index.js connected to mongoose')}).catch(err => console.log(err));

async function main() {
    await mongoose.connect(process.env.MONGO_URI);
    // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}


app.use('/', todoRoutes)





app.use((req, res, next) => {
    res.status(404).send("Sorry can't find that!")
  })


app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})