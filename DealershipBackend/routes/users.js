var express = require('express');
var router = express.Router();

/* GET users listing. */

const userController = require('../controllers/user')


router.post('/add/', userController.addUser)

router.get('/', function (req, res, next) {
  res.json({ success: '1' });
});

module.exports = router;
