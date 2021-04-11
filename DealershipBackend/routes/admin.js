var express = require('express');
var router = express.Router();
const bcrypt = require("bcryptjs")
const jwt  = require('jsonwebtoken')
/* GET inventory listing for admin. */
const adminController = require('../controllers/admin')

router.get('/', adminController.getAll);
router.get('/:car_id', adminController.getOne);
router.delete('/:car_id', adminController.deleteById);


const authController = require('../controllers/auth')

//router.post('/signin', authController.signin)


module.exports = router;
