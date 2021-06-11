const { addArrays } = require("../Katats/kata7");

describe("addArrays", () => {
  test("should return error if input arrays are not the same length ", () => {
    expect(addArrays([1, 2, 3], [1, 2])).toEqual("Error");
  });
  test("should return second numbers of each of the two input arrays, added into a new returned array ", () => {
    expect(addArrays([3, 4], [1, 2])).toEqual([4, 6]);
  });
  test("should return all numbers of the two input arrays, added into a new returned array ", () => {
    expect(addArrays([3, 4, 5, 3, 2], [1, 2, 4, 2, 5])).toEqual([
      4, 6, 9, 5, 7,
    ]);
  });
});
