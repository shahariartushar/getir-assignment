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
      "Error occured. Reason(s)- minCount is expected && maxCount is expected && startDate is expected && endDate is expected"
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
      "Error occured. Reason(s)- endDate should be after startDate && maxCount should be greater than minCount"
    );
  });
  test("should return specific error message for the invalid input", () => {
    let input = {
      startDate: "201s6-02-02",
      endDate: "201s8-02-02",
      minCount: 2700.5,
      maxCount: "3000.8",
    };
    expect(validateRequest(input).errMessage).toBe(
      "Error occured. Reason(s)- minCount type should be integer && maxCount type should be integer && startDate format should be YYYY-MM-DD && endDate format should be YYYY-MM-DD"
    );
  });
});
