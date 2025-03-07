const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const tokens = require('./routes/tokenRoutes');

const app = express();

// CORS configuration
const corsOptions = {
    optionsSuccessStatus: 200, 
};

// Middleware order
app.use(cors(corsOptions));
app.use(bodyParser.json());

// Routes
app.use("/blockfridge/tokens", tokens);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on port ${PORT}`);
});
