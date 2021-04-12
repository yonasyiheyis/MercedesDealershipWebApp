var express = require('express');
var router = express.Router();

const userController = require('../controllers/user')
/* GET users listing. */

router.get('/', userController.getusers);



router.post('/add/', userController.addUser)



module.exports = router;