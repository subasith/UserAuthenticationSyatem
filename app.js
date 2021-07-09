const express = require('express');
const mongoose = require('mongoose');
const user = require('./routes/user');
const app = express();

const conn = require('./Db/connection');

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

mongoose.connect(conn.db,{useNewUrlParser:true,useCreateIndex:true});
const connection = mongoose.connection;
connection.on('open',()=> {

    console.log("Connection established successfully...");
});


app.use('/user',user);

app.listen(conn.port,(err)=>{
    if (err){
        console.error(err)
    }
    console.log(`Connected to port ${conn.port}`)
});