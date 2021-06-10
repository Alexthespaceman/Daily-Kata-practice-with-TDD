// Write an algorithm that takes an array 
// and moves all of the zeros to the end,
// preserving the order of the other elements.

// moveZeros([false,1,0,1,2,0,1,3,"a"]) 
// returns[false,1,1,2,1,3,"a",0,0]


exports.moveZeros = (arr)=> {
  let zeroArr = [];
  let newArr = []
  for(let i= 0; i < arr.length; i++){
    if(arr[i]=== 0){
      zeroArr.push(arr[i])
    }
    else {
      newArr.push(arr[i])
    }
  }
  return newArr.concat(zeroArr)
}


exports.moveZeros = (arr)=> {
const zero = arr.filter(letter=> letter === 0)
const nonZero = arr.filter(letter => letter !==  0)
return nonZero.concat(zero)
}