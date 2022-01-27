const { Record } = require("../models/records");
const myFunction = async function getRecords(
  startDate,
  endDate,
  minCount,
  maxCount
) {
  const result = Record.aggregate([
    // add 'totalCount' field for sum of counts array value
    {
      $addFields: {
        totalCount: { $sum: "$counts" },
      },
    },
    // filter 'totalCount' and 'createdAt' fields
    {
      $match: {
        totalCount: {
          $gte: parseInt(minCount),
          $lte: parseInt(maxCount),
        },
        createdAt: {
          $gte: new Date(startDate),
          $lte: new Date(endDate),
        },
      },
    },
    // set response field
    {
      $project: {
        _id: 0,
        key: 1,
        createdAt: 1,
        totalCount: 1,
      },
    },
  ]).exec();

  return result;
};
module.exports.getRecords = myFunction;
