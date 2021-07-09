const userService = require('../services/user')
const routers = require('express').Router();


routers.post('/adduser',userService.AddUser);
routers.get('/loginUser',userService.loginUser);
routers.put('/UpdateUser/:Email',userService.UpdateUser);
routers.delete('/delete',userService.DeleteUser);



module.exports= routers;