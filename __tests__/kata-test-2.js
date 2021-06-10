const {spinWords} = require("../Katats/kata2")


describe.only("function spinWords", () => {
  test("if passed a string should return a string", () => {
    expect(typeof spinWords("hello") === "string").toBe(true);
  });
  test("if input is less 5 letters, return input", () => {
    expect(spinWords("hi")).toBe("hi");
  });
  test("if input is 5 letters or, return input reversed", () => {
    expect(spinWords("chocolate")).toBe("etalocohc");
  });
  test("if input is a sentence, return sentence with words >= 5 reversed", () => {
    expect(spinWords("I love chocolate")).toBe("I love etalocohc");
  });
  test("if input is a sentence, return sentence with words >= 5 reversed", () => {
    expect(spinWords("This is another test")).toBe("This is rehtona test");
  });
})