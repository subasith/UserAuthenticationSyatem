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
exports.loginUser=(req,res,next)=>{

    if(!(req.body.email  && req.body.password )){
        res.status(400).send('All fields required')
        return;
    }
    users.find({
        'Email':req.body.email,
        'password':req.body.password
    })
        .then(user => {
                if (user.length <= 0){
                    res.status(400).send('Invalid Email or password');
                    return;
                }
                res.json(user)
            }
        )
        .catch(err=> res.json(err))

}

exports.UpdateUser =async (req,res,next)=>{
    const Email = req.params.Email;


    if(!Email ){
        res.status(400).send('Email is required tu update the user')
        return;
    }


    users.findOneAndUpdate(Email)
        .then(users =>{
            users.name = req.body.name;
            users.Address=req.body.address;
            users.Gender= req.body.Gender;
            users.password =  req.body.password;
            users.DOB = req.body.DOB;
            users.save()
                .then(()=>res.json('User Updated'))
                .catch(err=> res.status(400).send(`Error:  ${err}`))
        })
        .catch(err=>res.status(400).json(`Error : ${err}`));
};

exports.DeleteUser = async (req,res, next)=>{
    const Email = req.body.email;

    users.findOneAndDelete(Email)
        .then(()=>res.json('user Deleted'))
        .catch(err => res.status(400).send(`Error : ${err}`))

}

