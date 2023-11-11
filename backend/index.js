require('dotenv').config()
const express = require('express')
const app = express()
const path = require('path')
const mongoose = require('mongoose');
const port = process.env.PORT || 8080


app.use(express.static(path.join(__dirname, 'public')))
app.use(express.json())



main().then(() => {console.log('index.js connected to mongoose')}).catch(err => console.log(err));

async function main() {
    await mongoose.connect(process.env.MONGO_URI);
    // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}


// read all todos
app.get('/', (req, res) => {
    res.json([{"id":"44fb-4b53-4034-9a0c-e8ca44767982","task":"blabla","done":false}, {"id":"lala44fb-4b53-4034-9a0c-e8ca4huhiuh2","task":"blabla2","done":true}])
})

// read single todo
app.get('/:id', (req, res) => {
    res.json({"id":"44fb-4b53-4034-9a0c-e8ca44767982","task":"blabla","done":false})
})

// create todo
app.post('/', (req, res) => {
    res.send('Get POST')
})

// check off todo
app.put('/:id', (req, res) => {
    res.send('PUT req')
})

// delete todo
app.delete('/:id', (req, res) => {
    res.send('DELETE req')
})





app.use((req, res, next) => {
    res.status(404).send("Sorry can't find that!")
  })


app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})