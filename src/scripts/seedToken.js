require('dotenv').config();
const mongoose = require('../config/config'); // Use your existing connection
const Token = require('../models/tokensModel');
const { tokens } = require('../data/tokens');

async function seedTokens() {
    try {
        // Clear existing tokens (optional)
        await Token.deleteMany({});
        
        // Transform tokens object into an array of documents
        const tokenArray = Object.keys(tokens).map(tokenId => ({
            tokenId: Number(tokenId),
            ...tokens[tokenId]
        }));

        // Insert tokens into the database
        await Token.insertMany(tokenArray);
        console.log('✅ Tokens seeded successfully');
    } catch (err) {
        console.error('❌ Error seeding tokens:', err);
    } finally {
        mongoose.connection.close();
    }
}

seedTokens();
