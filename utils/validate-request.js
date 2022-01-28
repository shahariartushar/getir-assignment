const validator = require("validator");
const isEmpty = require("./is-empty");
const formatErrorMessage = require("./format-message");

module.exports = validateBody = (data) => {
  let errors = {};

  // validate minCount from request body
  if (isEmpty(data.minCount)) {
    errors.minCount = "minCount is expected";
  } else {
    if (!validator.isInt(data.minCount.toString())) {
      errors.minCountType = "minCount type should be integer";
    }
  }

  // validate maxCount from request body
  if (isEmpty(data.maxCount)) {
    errors.maxCount = "maxCount is expected";
  } else {
    if (!validator.isInt(data.maxCount.toString())) {
      errors.maxCountType = "maxCount type should be integer";
    }
  }

  // validate startDate from request body
  if (isEmpty(data.startDate)) {
    errors.startDate = "startDate is expected";
  } else {
    if (!validator.isISO8601(data.startDate)) {
      errors.startDateFormat = "startDate format should be YYYY-MM-DD";
    }
  }

  // validate endDate from request body
  if (isEmpty(data.endDate)) {
    errors.endDate = "endDate is expected";
  } else {
    if (!validator.isISO8601(data.endDate)) {
      errors.endDateFormat = "endDate format should be YYYY-MM-DD";
    }
  }

  // validate startDate < endDate
  if (!isEmpty(data.startDate) && !isEmpty(data.endDate)) {
    if (validator.isAfter(data.startDate, data.endDate)) {
      errors.dateComapre = "endDate should be after startDate";
    }
  }

  // validate minCount < maxCount
  if (!isEmpty(data.minCount) && !isEmpty(data.maxCount)) {
    if (validator.isAfter(data.minCount.toString(), data.maxCount.toString())) {
      errors.countCompare = "maxCount should be greater than minCount";
    }
  }
  return {
    errMessage:
      Object.keys(errors).length > 0 ? formatErrorMessage(errors) : "",
    isValid: isEmpty(errors),
  };
};
