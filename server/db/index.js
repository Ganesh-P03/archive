const dotenv = require("dotenv");
dotenv.config();

const mongoose = require("mongoose");

mongoose.connect(process.env.MONGO_URI).catch((e) => {
  console.error("Connection error", e.message);
});

const db = mongoose.connection;

module.exports = db;
