// You will be given an array of numbers. You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions.

exports.sortArray = (array) => {
  if (array.length < 1) {
    return array;
  }
  const even = array.filter((num) => {
    return num % 2 == 0;
  });
  const odd = array.filter((num, i, arr) => {
    return num % 2 == 1;
  });
  console.log(odd);
  if (even.length == array.length) {
    return array;
  }
};
