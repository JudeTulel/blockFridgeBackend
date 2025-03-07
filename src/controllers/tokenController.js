const { tokens } = require('../data/tokens'); // Ensure this file exports 'tokens'

// Fetch all tokens
const getTokens = (req, res) => {
    res.json(tokens);
};

// Fetch metadata for a specific token
const getTokenMetadata = (req, res) => {
    const tokenId = req.params.tokenId;
    const tokenMetadata = tokens[tokenId];

    if (!tokenMetadata) {
        return res.status(404).json({ error: "Token not found" });
    }
    
    res.json(tokenMetadata);
};

// Update token metadata
const updateTokenMetadata = (req, res) => {
    const tokenId = req.params.tokenId;
    const { name, description, image, attributes, stock } = req.body;

    if (!name || !description || !image || !attributes || typeof stock !== "number") {
        return res.status(400).json({ error: "Missing or invalid required fields" });
    }

    tokens[tokenId] = { name, description, image, attributes, stock };
    res.json({ message: "Token metadata updated successfully", tokenId });
};

// Simulate minting tokens
const mintToken = (req, res) => {
    const tokenId = req.params.tokenId;
    const { quantity } = req.body;

    if (!tokens[tokenId]) {
        return res.status(404).json({ error: "Token not found" });
    }

    if (!quantity || typeof quantity !== "number" || quantity <= 0) {
        return res.status(400).json({ error: "Invalid quantity" });
    }

    // Ensure stock is a number before incrementing
    tokens[tokenId].stock = (tokens[tokenId].stock || 0) + quantity;

    res.json({
        message: "Tokens minted successfully",
        tokenId,
        quantity,
        newStock: tokens[tokenId].stock
    });
};

module.exports = {
    getTokens,
    getTokenMetadata,
    updateTokenMetadata,
    mintToken
};
