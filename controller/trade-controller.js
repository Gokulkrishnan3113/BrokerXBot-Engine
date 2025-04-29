const zerodhaService = require('../services/zerodha-service');

exports.placeOrder = async (req, res) => {
    try {
        const { symbol, quantity, order_type } = req.body;

        const orderResponse = await zerodhaService.placeOrder(symbol, quantity, order_type);

        res.status(200).json({
            message: 'Order placed successfully',
            data: orderResponse
        });
    } catch (error) {
        console.error('Error placing order', error);
        res.status(500).json({ message: 'Failed to place order', error: error.message });
    }
};
