// Your code here
//return a new array [1,2,3,9]
function mapToNegativize(sourceArray) {
    let newArray = [];
    for (let i = 0; i < sourceArray.length; i++) {
      if (Math.sign(sourceArray[i]) === -1) {
        newArray.push(Math.abs(sourceArray[i]))
      } else { 
        newArray.push(-Math.abs(sourceArray[i]))
      } 
    } return newArray;
  }
  
  function mapToNoChange(sourceArray) {
    return sourceArray;
  }
  
  function mapToDouble(sourceArray) {
    let doubleArray = [];
    for (let i = 0; i < sourceArray.length; i++) {
      doubleArray.push(sourceArray[i] * 2)
    } return doubleArray
  }
  
  function mapToSquare(sourceArray) {
    let squaredArray = [];
    for (let i = 0; i < sourceArray.length; i++) {
      squaredArray.push(sourceArray[i]**2);
    } return squaredArray
  }
  
  //reduce -- remember to return a value [1,2,3]
  function reduceToTotal(sourceArray, startingPoint = 0) {
    let i = 0
    let result;
    while (i < sourceArray.length) {
        result = sourceArray[i] + startingPoint;
        startingPoint = result
        i++;
    } return result
  }
  
  function reduceToAllTrue(sourceArray) {
    let trueArray = [];
    for (let i = 0; i < sourceArray.length; i++) {
      if (!!sourceArray[i] == true) { trueArray.push(sourceArray[i]) }
    }
    if (trueArray.length === sourceArray.length) {
        return true
    } else {
        return false
    }
  }
  
function reduceToAnyTrue(sourceArray) {
    let newArray = [];
    for (let i = 0; i < sourceArray.length; i++) {
        if(!!sourceArray[i]) {
            newArray.push(sourceArray[i])
        }
    } 
    if (newArray.length > 0){
        return true
    } else {
        return false
    }
}