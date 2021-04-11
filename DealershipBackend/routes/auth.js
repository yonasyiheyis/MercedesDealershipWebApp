var express = require('express');
const route = express.Router()
const bcrypt = require("bcryptjs")
const jwt  = require('jsonwebtoken')

const authController = require('../controllers/auth')

route.post('/signin', authController.login) 
   
   
   


module.exports = route;