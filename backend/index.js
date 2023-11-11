const express = require('express')
const app = express()
const path = require('path')
const port = process.env.PORT || 8080


app.use(express.static(path.join(__dirname, 'public')))



// read todo
app.get('/', (req, res) => {
    res.json({"id":"44fb-4b53-4034-9a0c-e8ca44767982","task":"blabla","done":false})
})

// create todo
app.post('/', (req, res) => {
    res.send('Get POST')
})

// check off todo
app.put('/', (req, res) => {
    res.send('PUT req')
})

// delete todo
app.delete('/', (req, res) => {
    res.send('DELETE req')
})





app.use((req, res, next) => {
    res.status(404).send("Sorry can't find that!")
  })


app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})