var express = require('express');
var router = express.Router();
const productController = require('../controllers/product')

router.get('/getAllProducts', productController.getAll);


module.exports = router;