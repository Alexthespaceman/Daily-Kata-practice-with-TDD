const {pigIt} = require("../Katats/kata4")

describe('pigIt', () => {
  test('should return an empty string if passed an empty string', () => {
    expect(pigIt("")).toBe("")
  });
  test('if passed a single word, should move the first letter of the word to the end of it and append with ay', () => {
    expect(pigIt("Pig")).toBe("igPay")
  });
  test('if passed mutiple words, should move the first letter of the words to the end of it and append with ay', () => {
    expect(pigIt('Hello world !')).toBe("elloHay orldway !")
  });
});
