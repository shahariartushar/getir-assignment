const validateRequest = require("../../utils/validate-request");
const { getRecords } = require("../../services/records");
const config = require("config");
const mongoose = require("mongoose");

beforeAll(() => {
  mongoose.connect(process.env.MONGODB_URL);
});
afterAll(async () => {
  await mongoose.connection.close();
});

describe("test response data", () => {
  test("should return the null output for the corrospoding input", async () => {
    let { startDate, endDate, minCount, maxCount } = {
      startDate: "2020-02-02",
      endDate: "2021-02-02",
      minCount: 2700,
      maxCount: 3000,
    };
    let result = await getRecords(startDate, endDate, minCount, maxCount);
    expect(result.length).toBe(0);
  });
  test("should return the correct output for the corrospoding input", async () => {
    let { startDate, endDate, minCount, maxCount } = {
      startDate: "2016-12-25",
      endDate: "2016-12-26",
      minCount: 2700,
      maxCount: 3000,
    };
    let result = await getRecords(startDate, endDate, minCount, maxCount);
    expect(result.length).toBeGreaterThanOrEqual(1);
  });
});
