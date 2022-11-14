const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    name : String,
    description : String,
    price : String,
    imageA: String
})

module.exports = mongoose.model('ProductYaa', productSchema)
