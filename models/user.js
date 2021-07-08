const  mongoose = require('mongoose')

const userDetails = new mongoose.Schema({

    name:{
        type: String,
        required: true
    },
    Address:{
        type: String,
        required: true
    },
    Email:{
        type: String,
        required: true
    },
    Gender:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    DOB:{
        type: String,
        required: true
    }
})

const user = mongoose.model('user',userDetails)

module.exports = user;