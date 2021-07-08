const express = require('express')
const mongoose = require('mongoose')

const app = express()

const conn = require('./Db/connection')

mongoose.connect(conn.db,{useNewUrlParser:true,useCreateIndex:true});
const con = mongoose.connection;
con.on('open',()=> {

    console.log("Connection established successfully...")
})

// const user = require('./routes/user')
// app.use('/user',user)

app.listen(conn.port,(err)=>{
    if (err){
        console.error(err)
    }
    console.log(`Connected to port ${conn.port}`)
})