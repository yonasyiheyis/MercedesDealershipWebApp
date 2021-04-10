var express = require('express');
var router = express.Router();

/* GET inventory listing for admin. */
const adminController = require('../controllers/admin')

router.get('/', adminController.getAll);
router.get('/:car_id', adminController.getOne);


module.exports = router;
