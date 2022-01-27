// const admin = require("../middleware/admin");
// const { Movie, validate, validatePatch } = require("../models/movie");
const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();
const checkParameter = require("../utils/validate-request");
const { getRecords } = require("../services/records");
const { json } = require("express/lib/response");
//const { json } = require("body-parser");
//var MongoClient = require('mongodb').MongoClient;
//const { count } = require("console");

router.post("/", async (req, res) => {

  const { startDate, endDate, minCount, maxCount } = req.body;
  const { errors, isValid } = validateBody(req.body);
  const result = await getRecords(startDate, endDate, minCount, maxCount);
  //check parameters' format
  if (!isValid)
    return res.status(500).send({
      code: -1,
      msg: errors.error,
      records: [],
    });

  // show null is response
  if (!result.length) {
    res.status(404).send({
      code: 1,
      msg: "No record found",
      records: [],
    });
  }
  // show response
  res.status(200).send({
    code: 0,
    msg: "Success",
    records: result,
  });
});

module.exports = router;
