const userService = require('../services/user')
const routers = require('express').Router();


routers.post('/adduser',userService.AddUser)

module.exports= routers;