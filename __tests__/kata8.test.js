const { sortArray } = require("../Katats/kata8");

describe("sortArray", () => {
  test("should return an empty array if passed an empty array", () => {
    expect(sortArray([])).toEqual([]);
  });
  test("should return an  array of even numbers in the same order if passed an array of even numbers", () => {
    expect(sortArray([2, 4, 6, 8])).toEqual([2, 4, 6, 8]);
    expect(sortArray([14, 18, 26, 30])).toEqual([14, 18, 26, 30]);
  });
  test("should return an  array of even numbers in the same order and odd numbers in ascending order when passed an array of even and odd numbers", () => {
    expect(sortArray([10, 4, 9, 1, 6, 8])).toEqual([10, 4, 1, 9, 6, 8]);
  });
});
