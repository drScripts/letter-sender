const mongoose = require("mongoose");
const config = require("../config");

mongoose.connect(config.mongoUrl);

const db = mongoose.connection;

module.exports = db;
