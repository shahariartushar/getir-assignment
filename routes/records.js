const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();
const validateBody = require("../utils/validate-request");
const { getRecords } = require("../services/records");

router.post("/", async (req, res) => {
  const { startDate, endDate, minCount, maxCount } = req.body;
  const { errMessage, isValid } = validateBody(req.body); // validate requerst body
  const result = await getRecords(startDate, endDate, minCount, maxCount); // fetch search result
  //check parameters' format
  if (!isValid)
    return res.status(500).send({
      code: -1,
      msg: errMessage,
      records: [],
    });

  // show null response
  if (!result.length) {
    return res.status(404).send({
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
