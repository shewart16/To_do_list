const mongoose = require('mongoose')

const listSchema = mongoose.Schema({
    item:{
        type: String,
        required: true
    }
})

module.exports = mongoose.model('homework', listSchema)