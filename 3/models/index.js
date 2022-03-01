const dbConfig = require('../config/db.mongo.js');
const mongoose = require('mongoose');
const db = {};
db.mongoose = mongoose;
db.url = dbConfig.url;
db.product = require('./product.js')(mongoose);
module.exports = db;