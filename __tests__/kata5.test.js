const { moveZeros } = require("../Katats/kata5")



describe('moveZeros', () => {
  test('if input is an empty array, return an empty array', () => {
    expect(moveZeros([])).toEqual([])
  });
  test('if input does not contain 0, preserves order', () => {
    expect(moveZeros([false, 1, 3])).toEqual([false, 1, 3])
  });
  test('moves 0 to the end whilst preserving order of other elements', () => {
    expect(moveZeros([0,false, 1])).toEqual([false, 1, 0])
  });
  test("moves 0's to the end whilst preserving order of other elements", () => {
    expect(moveZeros([false,1,0,1,2,0,1,3,"a"])).toEqual([false,1,1,2,1,3,"a",0,0])
  });
});