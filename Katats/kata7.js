// Create a function called addArrays() that combines two arrays of equal length, summing each element of the first with the corresponding element in the second, returning the "combined" summed array.
// Raise an error if input arguments are not of equal length.

exports.addArrays = (arr1, arr2) => {
  let newArr = [];
  if (arr1.length !== arr2.length) {
    return "Error";
  }
  newArr.push(arr1[0] + arr2[0]);
  newArr.push(arr1[1] + arr2[1]);
  return newArr;
};
