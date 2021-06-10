const { likes } = require("../Katats/kata3");

describe("likes function", () => {
  test("returns 'no one likes this' if no names are inputted", () => {
    expect(likes([])).toEqual("no one likes this");
  });
  test("returns 'Peter likes this' if one name is inputted", () => {
    expect(likes(["Peter"])).toEqual("Peter likes this");
  });
  test("returns 'Peter likes this' if one name is inputted", () => {
    expect(likes(["Jacob", "Alex"])).toEqual("Jacob and Alex like this");
  });
  test("returns 'Peter likes this' if one name is inputted", () => {
    expect(likes(["Max", "John", "Mark"])).toEqual(
      "Max, John and Mark like this"
    );
  });
  test("returns 'Peter likes this' if one name is inputted", () => {
    expect(likes(["Alex", "Jacob", "Mark", "Max"])).toEqual(
      "Alex, Jacob and 2 others like this"
    );
  });
});
