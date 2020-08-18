const mongoose = require('mongoose')

const authorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Author',authorSchema)//(name_ofthe table,ans the schema)