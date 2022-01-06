require("dotenv").config();
const express = require('express');
const app = express(); 
const port = process.env.PORT

app.get('/', function(req,res){
    res.send('success')
    console.log('in default route')
})

app.listen(port, () => {
    console.log('app listening on port ' + port)
})

