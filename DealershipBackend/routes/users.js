var express = require('express');
var router = express.Router();

/* GET users listing. */
<<<<<<< Updated upstream

const userController = require('../controllers/user')


router.post('/add/', userController.addUser)

=======
>>>>>>> Stashed changes
router.get('/', function (req, res, next) {
  res.json({ success: '1' });
});

module.exports = router;
