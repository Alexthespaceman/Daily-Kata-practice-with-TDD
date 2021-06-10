const {scramble} = require("../Katats/kata6")

describe('scramble', () => {
  test('should return a boolean', () => {
    expect(typeof scramble("", "") === "boolean").toBe(true)
  });
  test('returns true if str1 matches str2', () => {
    expect(scramble("a", "a")).toBe(true)
  });
  test('returns false if str1 does not match str2', () => {
    expect(scramble("a", "b")).toBe(false)
  });
  test('returns true if a portion of str1 can be rearranged to match str2', () => {
    expect(scramble("gih", "hi")).toBe(true)
  });
  test('returns true if a portion of str1 can be rearranged to match str2', () => {
    expect(scramble("rkqodlw", "world")).toBe(true)
  });
  test('returns true if a portion of str1 can be rearranged to match str2', () => {
    expect(scramble('cedewaraaossoqqyt', 'codewars')).toBe(true)
  });
  test('returns false if a portion of str1 cannot be rearranged to match str2', () => {
    expect(scramble('katas', 'steak')).toBe(false)
  });
});
