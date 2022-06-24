const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Paper = new Schema(
  {
    cName: { type: String, required: true },
    cId: { type: String, required: true },
    year: { type: String, required: true },
    url: { type: String, required: true },
    fName: { type: String, required: true },
    topics: { type: String },
  },
  { timestamps: true }
);

module.exports = mongoose.model("papers", Paper);
