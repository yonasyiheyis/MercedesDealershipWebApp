var express = require('express');
var router = express.Router();

/* GET inventory listing for admin. */
router.get('/', function (req, res, next) {
    res.send('respond with a resource');
});

module.exports = router;