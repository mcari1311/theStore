const express = require('express')
// const { default: mongoose } = require('mongoose')
require('dotenv').config() 
const app = express()
const mongoose = require('mongoose')
const methodOverride = require('method-override');
const productData = require('./utilities/productsData')
const port = process.env.PORT || 3003
//import models
const Product = require('./models/products')

//mongoose connect
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connection.once('open', ()=> {
    console.log('connected to mongo');
});

//view engine 
app.set('view engine', 'jsx') 
app.engine('jsx', require('express-react-views').createEngine())

//middleware
app.use((req, res, next) => {
	console.log('I run for all routes')
	next()
}) 
app.use(express.urlencoded({extended:false}));
//method override
app.use(methodOverride('_method'));



// //seed route 
// app.get('/product/seed', (req,res) => {
//     //comment the line below if you don't want to delete your whole entire collection
//     // Product.deleteMany({})
//     //create a list of pokemon into the database
//     Product.create(productData)
// })

//routes
app.get('/', (req, res) => {
    res.send('hello')
})
app.get('/product', (req, res) => {
    Product.find({}, (error, allProduct) => {
        res.render('Index', {
            product: allProduct
        })
    })
})


app.listen(port, function() {
    console.log('Listening on port', port)
})