const mongoose = require("mongoose");

const Record = mongoose.model(
  "Record",
  new mongoose.Schema({
    _id: mongoose.Types.ObjectId,
    key: String,
    value: String,
    createdAt: Date,
    counts: Array,
  })
);

exports.Record = Record;
