const { expect } = require("@jest/globals");
const { i } = require("../Katats/kata1");

describe("function i", () => {
  test("if passed a string should return a string", () => {
    let input = "hello";
    let output = i(input);
    expect(typeof output === "string").toBe(true);
  });
  test("if passed a number should return a string that says return a string", () => {
    let input = 2;
    let output = "Invalid word";
    expect(i(input)).toBe(output);
  });
  test("if word begins with I, return input", () => {
    let input = "Iphone";
    let output = "Iphone";
    expect(i(input)).toBe(output);
  });
  test("The number of vowels should not be greater than or equal to the number of consonants", () => {
    let input = "East";
    let output = "Invalid word";
    expect(i(input)).toBe(output);
  });
});
