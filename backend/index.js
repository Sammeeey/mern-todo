require('dotenv').config()
const express = require('express')
const app = express()
const path = require('path')
const mongoose = require('mongoose');
const morgan = require('morgan');
const todoRoutes = require('./routes/todo')
const cors = require('cors');
const port = process.env.PORT || 8080

const corsOptions = {
    origin: [process.env.FRONTEND_URI, 'http://localhost:5173'],
    optionsSuccessStatus: 200,
};

app.use(express.static(path.join(__dirname, 'public')))
app.use(express.json())
app.use(morgan('dev'))
app.use(cors(corsOptions));



main().then(() => {console.log('index.js connected to mongoose')}).catch(err => console.log(err));

async function main() {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log('Connected to MongoDB');
    } catch (error) {
        console.error('MongoDB connection error:', error);
        throw error; // Rethrow the error to indicate that the application failed to start
    }
}


app.use('/', todoRoutes)





app.use((req, res, next) => {
    res.status(404).send("Sorry can't find that!")
  })


app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})