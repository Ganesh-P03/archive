const mongoose = require("mongoose");

mongoose.connect(/* connection url */).catch((e) => {
  console.error("Connection error", e.message);
});

const db = mongoose.connection;

module.exports = db;
