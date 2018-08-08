var express = require('express');
var router = express.Router();
const userController = require('../controllers/user')

router.post('/register', userController.register);
router.post('/login', userController.login);
router.put('/changeProfile', userController.changeProfile);
module.exports = router;