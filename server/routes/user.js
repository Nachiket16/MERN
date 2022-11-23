const express = require('express')
const cryptoJs = require('crypto-js')
const db = require('../db')

const router = express.Router()

router.post('/signup', (request, response) => {
  const { First_name, Last_name, Phone_no, Email, Password } = request.body

  const encryptedPassword = String(cryptoJs.MD5(Password))
  const query = ` 
        INSERT INTO 
        user (First_name, Last_name, Phone_no, Email, Password) 
        VALUES ('${First_name}', '${Last_name}', ${Phone_no}, '${Email}', '${encryptedPassword}');
        `
  const connection = db.connect()

  connection.query(query, (error, result) => {
    connection.end()

    if (error) {
      response.send(error)
    } else {
      response.send(result)
    }
  })
})

router.post('/signin', (request, response) => {
  const { Email, Password } = request.body

  const encryptedPassword = String(cryptoJs.MD5(Password))
  const query = ` 
        SELECT User_id, First_name, Last_name
        FROM user
        WHERE Email='${Email}' AND Password='${encryptedPassword}' ;
        `
  const connection = db.connect()

  connection.query(query, (error, result) => {
    connection.end()

    if (error) {
      response.send(error)
    } else {
      if (result.length === 0) {
        response.send('User does not exist')
      } else {
        const user = result[0]
        response.send({
          User_id: user['User_id'],
          First_name: user['First_name'],
          Last_name: user['Last_name'],
        })
      }
    }
  })
})

module.exports = router
