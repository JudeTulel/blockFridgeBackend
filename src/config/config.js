require('dotenv').config();

const mongoose = require('mongoose');

const MONGODB_USERNAME = process.env.MONGODB_USER
const MONGODB_PASSWORD = process.env.MONGODB_PASSWORD 
const MONGODB_HOST = process.env.MONGODB_CLUSTER

const MONGODB_DATABASE = process.env.MONGODB_DBNAME

const uri = `mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PASSWORD}@${process.env.MONGODB_CLUSTER}/${process.env.MONGODB_DBNAME}?${process.env.MONGODB_OPTIONS}`;

mongoose.connect(uri, {
})
.then(() => console.log('MongoDB connected successfully'))
.catch((err) => console.error('MongoDB connection error:', err));

module.exports = mongoose;
