const express = require('express')
const cryptoJs = require('crypto-js')
const db = require('../db')
const jwt = require('jsonwebtoken')
const config = require('../config')
const utils = require('../utils')

const router = express.Router()

router.post('/signup', (request, response) => {
  const { First_name, Last_name, Phone_no, Email, Password } = request.body
  const encryptedPassword = String(cryptoJs.MD5(Password))
  const query = ` 
          INSERT INTO 
          user (First_name, Last_name, Phone_no, Email, Password) 
          VALUES (?, ?, ?, ?, ?);
        `
  db.pool.query(
    query,
    [First_name, Last_name, Phone_no, Email, encryptedPassword],
    (error, result) => {
      response.send(utils.createResult(error, result))
    }
  )
})

router.post('/signin', (request, response) => {
  const { Email, Password } = request.body
  const encryptedPassword = String(cryptoJs.MD5(Password))
  const query = ` 
          SELECT User_id, First_name, Last_name
          FROM user
          WHERE Email=? AND Password=? ;
        `
  db.pool.query(query, [Email, encryptedPassword], (error, users) => {
    const result = {}
    if (error) {
      result['status'] = 'error'
      result['error'] = error
    } else {
      if (users.length === 0) {
        result['status'] = 'error'
        result['error'] = 'Invalid Email or Password'
      } else {
        const user = users[0]
        result['status'] = 'success'

        const token = jwt.sign({ User_id: user['User_id'] }, config.secret)
        result['data'] = {
          First_name: user['First_name'],
          Last_name: user['Last_name'],
          token,
        }
      }
    }
    response.send(result)
  })
})

module.exports = router
