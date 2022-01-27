const express = require("express");
const restApi = require("../routes/records");

module.exports = (app) => {
  app.use(express.json());
  app.use("/api/data", restApi);
};
