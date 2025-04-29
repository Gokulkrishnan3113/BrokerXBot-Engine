const express = require('express');
const router = express.Router();
const tradeController = require('../controller/trade-controller');

// Endpoint to place buy/sell orders
router.post('/order', tradeController.placeOrder);

module.exports = router;
