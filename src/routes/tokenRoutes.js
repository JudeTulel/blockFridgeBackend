const express = require('express');
const router = express.Router();
const tokenController = require('../controllers/tokenController');

// Fetch tokens
router.get('/', tokenController.getTokens);

// Fetch metadata for a token
router.get('/:tokenId', tokenController.getTokenMetadata);

// Update metadata for a token
router.put('/:tokenId', tokenController.updateTokenMetadata);

// Mint tokens
router.post('/:tokenId/mint', tokenController.mintToken);

module.exports = router;
