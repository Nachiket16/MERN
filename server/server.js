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

app.use((request, response, next) => {
    // console.log(request.url)
    if (
      request.url === '/signin' ||
      request.url === '/signup' ||
      request.url === '/home'
    ) {
      next()
    } else {
      const token = request.headers['token']
  
      // if (token == 'undefined') {
      //   response.send(utils.createError('Please Signin...'))
      // }
  
      if (!token || token.length === 0) {
        response.send(utils.createError('Token is missing'))
      } else {
        try {
          // extract the user id from token
          const payload = jwt.verify(token, config.secret)
  
          // add the userid to the request so that
          // all the other requests can use it
          request.userId = payload.User_id
  
        //   if (request.url.includes('admin')) {
        //     // console.log(request.url)
        //     if (payload.Role === 'admin') {
        //       next()
        //     } else {
        //       response.send(utils.createError('ACCESS DENIED'))
        //     }
        //   } else {
            next()
        //   }
        } catch (ex) {
          response.send(utils.createError('Invalid Token, please signin'))
        }
      }
    }
  })




const userRouter = require('./routes/user')
app.use(userRouter)

//start app listening on a port 300
app.listen(4000, '0.0.0.0', () => {
    console.log('express application is started on port 4000')
})
