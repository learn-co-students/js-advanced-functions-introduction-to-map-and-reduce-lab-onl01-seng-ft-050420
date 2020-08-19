// Your code here

function mapToNegativize(sourceArray) {
    let newArr = []
    for (let index = 0; index<sourceArray.length; index++){
       newArr.push(-1*sourceArray[index])
    }
    return newArr
     
 };
 
 function mapToNoChange(sourceArray) {
    let newArr = []
    for(let index=0; index<sourceArray.length; index++) {
       newArr.push(sourceArray[index])
    }
    return newArr
 
 };
 
 function mapToDouble(sourceArray) {
    let newArr = []
    for (let index=0; index<sourceArray.length;index++){
       newArr.push(sourceArray[index]*2)
    }
    return newArr
    
 };
 
 function mapToSquare(sourceArray) {
    let newArr = []
    for(let index=0; index<sourceArray.length; index++){
       newArr.push(sourceArray[index]**2)
    }
    return newArr
 
    
 };
 
 function reduceToTotal(sourceArr, startingPoint = 0) {
    let value = startingPoint
    for(let index=0; index<sourceArr.length; index++){
        value = value + sourceArr[index]
    }
    return value
   
 
 };
 
 function reduceToAllTrue(sourceArr) {
    for(const element of sourceArr) { 
       if (!element) {return false}
    }
    return true
    
 };
 
 function reduceToAnyTrue(sourceArr) {
    for(const element of sourceArr) { 
       if (!!element) {return true}
    }
    return false
 };
