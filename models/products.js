const mongoose = require('mongoose')

const productsSchema = new mongoose.Schema({
    name: {type: String, required: true} ,
    // img: {type: String, required: true} ,
    descrip: {type: String, required: true} ,
    quantity: {type: String, required: true} ,
    cost: {type: String, required: true}
})

const Product = mongoose.model('Product', productsSchema)
module.exports = Product 