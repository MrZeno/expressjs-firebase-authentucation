const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const router = require('./routes/authentication/index')



const app = express()

// USE BODY PARSER FOR POST REQUEST
app.use(bodyParser.urlencoded({ extended: true }));

// TO SERVE STATIC FILES
app.use(express.static('public'))

// SET THE VIEW ENGIN
app.set('view engine', 'hbs')

// DIR FOR VIEWS
app.set('views', path.join(__dirname, 'views'))

// ROUTING
app.use(router)



// RUN THE SERVER 
app.listen(3000, () => {
    console.log('Start listen aat port 3000 ...')
})