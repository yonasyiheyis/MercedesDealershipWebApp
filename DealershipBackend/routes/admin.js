var express = require('express');
var router = express.Router();

/* GET inventory listing for admin. */
const adminController = require('../controllers/admin')




router.post('/cars/', adminController.addCar)

router.patch('/cars/', adminController.updateCar)

router.get('/', adminController.getAll);
router.get('/:car_id', adminController.getOne);
router.delete('/:car_id', adminController.deleteById);


module.exports = router;
