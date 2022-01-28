const formatMessage = require("../../utils/format-message");
const isEmpty = require("../../utils/is-empty");
const validateRequest = require("../../utils/validate-request");

describe("test validate-request functionality", () => {
  test("should return specific error message for the null input", () => {
    let input = {
      startDate: "",
      endDate: "",
      minCount: null,
      maxCount: null,
    };
    expect(validateRequest(input).errMessage).toBe(
      "Error occured. Reason(s)- minCount : minCount is expected && maxCount : maxCount is expected && startDate : startDate is expected && endDate : endDate is expected"
    );
  });
  test("should return specific error message for the incorrect input", () => {
    let input = {
      startDate: "2019-02-02",
      endDate: "2018-02-02",
      minCount: 2700,
      maxCount: 300,
    };
    expect(validateRequest(input).errMessage).toBe(
      "Error occured. Reason(s)- dateComapre : endDate should be after startDate && countCompare : maxCount should be greater than minCount"
    );
  });
  test("should return specific error message for the invalid input", () => {
    let input = {
      startDate: "20s19-02-02",
      endDate: "20s18-02-02",
      minCount: "2700",
      maxCount: "300",
    };
    expect(validateRequest(input).errMessage).toBe(
      "Error occured. Reason(s)- startDateFormat : format should be YYYY-MM-DD && endDateFormat : format should be YYYY-MM-DD && countCompare : maxCount should be greater than minCount"
    );
  });
});
