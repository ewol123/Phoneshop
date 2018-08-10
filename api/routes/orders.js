var express = require('express');
var router = express.Router();
const orderController = require('../controllers/order')

router.post('/setOrder', orderController.setOrder);
router.get('/getOrders/:id', orderController.getOrders);

module.exports = router;