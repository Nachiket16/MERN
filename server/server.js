// import express
const express = require('express')
const cors = require('cors')
const config = require('./config')
const jwt = require('jsonwebtoken')
const utils = require('./utils')

//create a new instance of express application
const app = express()
app.use(express.json())
app.use(cors())


//start app listening on a port 300
app.listen(3000, '0.0.0.0', ()=>{
    console.log('express application is started on port 3000')
})
