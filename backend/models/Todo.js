if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config()
}
const mongoose = require('mongoose')

const Schema = mongoose.Schema


const todoSchema = new Schema({
    // {"id":"44fb-4b53-4034-9a0c-e8ca44767982","task":"blabla","done":false}
    task: {
        type: String,
        required: [true, 'task name is required']
    },
    done: {
        type: Boolean,
        required: true,
        default: false,
    },
}, {
    timestamps: true
})

module.exports = mongoose.model('Todo', todoSchema)