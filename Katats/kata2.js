// Write a function that takes in a string of one or more words, 
// and returns the same string, 
// but with all five or more letter words reversed 
// (like the name of this kata).

// Strings passed in will consist of only letters and spaces.
// Spaces will be included only when more than one word is present.


exports.spinWords = (word)=>{
  const newWordArray = []
  const wordArray = word.split(" ")
  for(let i= 0; i < wordArray.length; i++){
    if(wordArray[i].length <= 4){
      newWordArray.push(wordArray[i])
    }
    else{
      newWordArray.push(wordArray[i].split("").reverse().join(""))
    }
  }
  return newWordArray.join(" ")
}