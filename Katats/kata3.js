// You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items. We want to create the text that should be displayed next to such an item.

// Implement a function likes :: [String] -> String, which must take in input array, containing the names of people who like an item. It must return the display text as shown in the examples:

// likes [] -- must be "no one likes this"
// likes ["Peter"] -- must be "Peter likes this"
// likes ["Jacob", "Alex"] -- must be "Jacob and Alex like this"
// likes ["Max", "John", "Mark"] -- must be "Max, John and Mark like this"
// likes ["Alex", "Jacob", "Mark", "Max"] -- must be "Alex, Jacob and 2 others like this"

exports.likes = (names) => {
  let namesLength = names.length;

  if (names.length > 3) {
    return (
      names[0] +
      ", " +
      names[1] +
      " and " +
      (namesLength - 2) +
      " others like this"
    );
  }
  if (names.length == 2) {
    return names[0] + " and " + names[1] + " like this";
  }
  if (names.length == 3) {
    return names[0] + ", " + names[1] + " and " + names[2] + " like this";
  }

  if (names.length < 1) {
    return "no one likes this";
  } else {
    return names
      .map((name) => {
        return name + " likes this";
      })
      .join("");
  }
};

// return names.length >= 1
//   ? names.map((name) => {
//       return name + " likes this";
//     })
//   : "no one likes this";
