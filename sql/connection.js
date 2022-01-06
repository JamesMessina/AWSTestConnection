require('dotenv').config(); 
const mysql = require('mysql');

let pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    connectionLimit: 500
})

pool.getConnection(function(err, connection){
    if(err){
        console.error('error connecting to database ' + err.stack);
        return;
    }else{
        console.log('connected to mysql with id ' +connection.threadId)
    }
})

module.exports = pool; 
