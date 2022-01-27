const validator = require("validator"),
  isEmpty = require("./is-empty");

module.exports = validateBody = (data) => {
  let errors = {};

  // validate minCount from request body
  if (isEmpty(data.minCount)) {
    errors.error = "minCount is expected";
  } else {
    if (!validator.isInt(data.minCount.toString())) {
      errors.error = "integer value is expected";
    }
  }

  // validate maxCount from request body
  if (isEmpty(data.maxCount)) {
    errors.error = "maxCount is expected";
  } else {
    if (!validator.isInt(data.maxCount.toString())) {
      errors.error = "integer value is expected";
    }
  }

  // validate startDate from request body
  if (isEmpty(data.startDate)) {
    errors.error = "startDate is expected";
  } else {
    if (!validator.isISO8601(data.startDate)) {
      errors.error =
        "valid format is expected, startDate format should be YYYY-MM-DD";
    }
  }

  // validate endDate from request body
  if (isEmpty(data.endDate)) {
    errors.error = "endDate is expected";
  } else {
    if (!validator.isISO8601(data.endDate)) {
      errors.error =
        "valid format is expected, endDate format should be YYYY-MM-DD";
    }
  }

  // validate startDate < endDate
  if (!isEmpty(data.startDate) && !isEmpty(data.endDate)) {
    if (validator.isAfter(data.startDate, data.endDate)) {
      errors.error = "endDate should be after startDate";
    }
  }

  // validate minCount < maxCount
  if (!isEmpty(data.minCount) && !isEmpty(data.maxCount)) {
    if (validator.isAfter(data.minCount.toString(), data.maxCount.toString())) {
      errors.error = "maxCount should be greater than minCount";
    }
  }
  console.log(errors);
  return {
    errors,
    isValid: isEmpty(errors),
  };
};
