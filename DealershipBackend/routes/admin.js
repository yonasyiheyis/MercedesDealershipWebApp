var express = require('express');
var router = express.Router();

/* GET inventory listing for admin. */
const adminController = require('../controllers/admin')




router.post('/cars/', adminController.addCar)

router.patch('/cars/', adminController.updateCar)

module.exports = router;