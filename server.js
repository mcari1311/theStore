const express = require('express')
// const { default: mongoose } = require('mongoose')
require('dotenv').config() 
const app = express()
const mongoose = require('mongoose')
const methodOverride = require('method-override');
const port = process.env.PORT || 3003

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

//import models
const Product = require('./models/products')


//routes
app.get('/', (req, res) => {
    res.send('hello')
})


app.listen(port, function() {
    console.log('Listening on port', port)
})