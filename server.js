const express = require('express')
require('dotenv').config() 
const app = express()
const port = process.env.PORT || 3003

//view engine 
app.set('view engine', 'jsx') 
app.engine('jsx', require('express-react-views').createEngine())

//try route
app.get('/', (req, res) => {
    res.send('hello')
})

app.listen(port, function() {
    console.log('Listening on port', port)
})