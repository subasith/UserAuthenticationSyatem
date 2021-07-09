const users = require('../models/user');
const {v4:uuidv4} = require('uuid');

exports.AddUser =(req,res,next)=>{

    const Uid = uuidv4();
    const name = req.body.name;
    const Address= req.body.address;
    const Email = req.body.Email;
    const Gender = req.body.Gender;
    const password = req.body.password;
    const DOB = req.body.DOB;

    console.log(Uid);
    console.log(name);

    const addUser = new users({
        Uid,
        name,
        Address,
        Email,
        Gender,
        password,
        DOB
    });

    addUser.save()
        .then(()=>res.json('Registration Successfully !'))
        .catch(err=>res.status(400).json(`Error : ${err}`));
}

