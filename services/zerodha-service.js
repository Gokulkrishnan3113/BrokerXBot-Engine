import axios from "axios";
// const qs = require('qs');
import qs from "qs";
// const axios = require('axios');
import dotenv from "dotenv";
dotenv.config();

export async function placeOrder(symbol, quantity, order_type) {
    const apiKey = process.env.ZERODHA_API_KEY;
    const accessToken = process.env.ZERODHA_REQUEST_TOKEN;

    const config = {
        headers: {
            'X-Kite-Version': '3',
            'Authorization': `token ${apiKey}:${accessToken}`,
            'Content-Type': 'application/x-www-form-urlencoded',
        },
    };

    const data = qs.stringify({
        tradingsymbol: symbol,
        exchange: 'NSE',
        transaction_type: 'BUY',
        order_type: order_type,
        quantity: quantity,
        product: 'CNC',
        // validity: 'DAY',
    });

    let kiteUrl = 'https://api.kite.trade/orders/regular';
    let respKite = {};

    await axios.post(kiteUrl, data, config)
        .then(response => {
            respKite = {
                statusCode: response.status,
                data: response.data
            };
        })
        .catch(error => {
            respKite = {
                statusCode: error.response?.status || 500,
                data: error.response?.data || error.message,
            };
        });

    return respKite;
}
