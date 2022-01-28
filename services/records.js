var util = require('util');
var encoder = new util.TextEncoder('utf-8');
const  { TextEncoder, TextDecoder } = require('util');
global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder;

const { Record } = require("../models/records");

const getRecords = function getRecords(
  startDate,
  endDate,
  minCount,
  maxCount
) {
  try{
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
          //data:{ $slice: ['$data', skip, limit]}
        },
      },
    ]).exec();
  
    //return (await result).slice(skip, skip+limit);
    return result;
  }
 catch(e)
 {

 }
};
module.exports.getRecords = getRecords;
