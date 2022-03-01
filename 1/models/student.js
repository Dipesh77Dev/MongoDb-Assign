const dbConfig = require('../config/db.mongo.js');
const mongoose = require('mongoose');
const db = {};
db.mongoose = mongoose;
db.url = dbConfig.url;
db.tutorial=require('./tutorial.js')(mongoose);
// module.export/export
module.exports = db;