// Complete the function scramble(str1, str2) 
// that returns true if a portion of str1 characters 
// can be rearranged to match str2, otherwise returns false.

// Notes:

// Only lower case letters will be used (a-z). No punctuation or digits will be included.
// Performance needs to be considered
// Input strings s1 and s2 are null terminated.
// Examples
// scramble('rkqodlw', 'world') ==> True
// scramble('cedewaraaossoqqyt', 'codewars') ==> True
// scramble('katas', 'steak') ==> False



exports.scramble = (str1, str2) => {
  let arr = str2.split('').sort();
  let sorted_str1 = str1.split('').sort().join();

  return arr.every(letter => {
      let i = sorted_str1.indexOf(letter);
      if (i > -1){
          sorted_str1 = sorted_str1.substring(i+1, sorted_str1.length);
          return true
      }else {
          return false
      }
  })
}
