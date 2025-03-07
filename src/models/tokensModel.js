const mongoose = require('mongoose');

const TokenSchema = new mongoose.Schema({
    tokenId: { type: Number, required: true, unique: true },
    name: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: String, required: true },
    attributes: [
        {
            trait_type: { type: String, required: true },
            value: { type: String, required: true },
        }
    ],
    stock: { type: Number, required: true }
});

module.exports = mongoose.model('Token', TokenSchema);
