const { elementsSum } = require("../Katats/kata9");

describe("elementsSum", () => {
  test("should return 'enter valid array' if an array is not passed", () => {
    expect(elementsSum(3)).toEqual("enter valid array");
  });
  test("should return the total of all 3 nested arrays", () => {
    expect(
      elementsSum([
        [3, 2, 1, 0],
        [4, 6, 5, 3, 2],
        [9, 8, 7, 4],
      ])
    ).toEqual(16);
  });
});
