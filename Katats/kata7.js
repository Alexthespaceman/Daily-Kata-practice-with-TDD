// Create a function called addArrays() that combines two arrays of equal length, summing each element of the first with the corresponding element in the second, returning the "combined" summed array.
// Raise an error if input arguments are not of equal length.

exports.addArrays = (arr1, arr2) => {
  if (arr1.length !== arr2.length) {
    return "Error";
  }

  return arr1.map((el, i) => {
    return arr1[i] + arr2[i];
  });
};
