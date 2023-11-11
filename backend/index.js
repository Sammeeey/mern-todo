const express = require('express')
const app = express()
const path = require('path')
const port = 8080


app.use(express.static(path.join(__dirname, 'public')))



app.get('/', (req, res) => {
    res.send('Hi')
})

app.post('/', (req, res) => {
    res.send('Get POST')
})

app.put('/', (req, res) => {
    res.send('PUT req')
})

app.delete('/', (req, res) => {
    res.send('DELETE req')
})





app.use((req, res, next) => {
    res.status(404).send("Sorry can't find that!")
  })


app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})