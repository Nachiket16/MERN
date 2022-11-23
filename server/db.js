const mysql = require('mysql')

const pool = mysql.createPool({
    connectionLimit:20,
    host: 'localhost',
    user: 'root',
    password: 'manager',
    database: 'Mobigic',
    port: '3306',
})

module.exports = {
    pool,
}