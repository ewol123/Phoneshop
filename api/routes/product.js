var express = require('express');
var router = express.Router();
const productController = require('../controllers/product')

router.get('/getAllProducts', productController.getAll);
router.post('/addProduct', productController.addProduct)
router.delete('/deleteProduct/:id', productController.deleteProduct);
router.put('/updateProduct', productController.updateProduct);
module.exports = router;