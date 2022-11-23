// import express
const express = require('express')
const cors = require('cors')


//create a new instance of express application
const app = express()

app.use(express.json())
app.use(cors())

const userRouter = require('./routes/user')

app.use(userRouter)

//start app listening on a port 300
app.listen(4000, '0.0.0.0', ()=>{
    console.log('express application is started on port 4000')
})
