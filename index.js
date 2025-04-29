const express = require('express');
const dotenv = require('dotenv');

// Load environment variables
dotenv.config();

const app = express();
app.use(express.json());

// Import routes
const tradeRoutes = require('./routes/trade-route');
const newsRoutes = require('./routes/news-route');

// Use routes
app.use('/trade', tradeRoutes);
app.use('/news', newsRoutes);

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`MCP Server running on port ${PORT}`);
});
