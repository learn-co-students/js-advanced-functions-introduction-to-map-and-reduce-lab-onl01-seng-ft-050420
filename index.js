// Your code here
function mapToNegativize(sourceArray) {
   let newArr = []
   for (let i = 0; i<sourceArray.length; i++){
      newArr.push(-1*sourceArray[i])
   }
   return newArr
   //return sourceArray.map(num => num*(-1))

    
};

function mapToNoChange(sourceArray) {
   let newA = []
   for(let i=0; i<sourceArray.length; i++) {
      newA.push(sourceArray[i])
   }
   return newA
   //return sourceArray.map(e => e)
};

function mapToDouble(sourceArray) {
   let newA = []
   for (let i=0; i<sourceArray.length;i++){
      newA.push(sourceArray[i]*2)
   }
   return newA
   //return sourceArray.map(num => num*2)
};

function mapToSquare(sourceArray) {
   let newA = []
   for(let i=0; i<sourceArray.length; i++){
      newA.push(sourceArray[i]**2)
   }
   return newA

   //return sourceArray.map(num => num**2)
};

function reduceToTotal(sourceArr, starttingPoint = 0) {
   let value = starttingPoint
   for(let i=0; i<sourceArr.length; i++){
       value = value + sourceArr[i]
   }
   return value
  

   //return sourceArr.reduce( function (total, currentValue){return total + currentValue}, starttingPoint)
};

function reduceToAllTrue(sourceArr) {
   for(const e of sourceArr) { 
      if (!e) {return false}
   }
   return true
   
};

function reduceToAnyTrue(sourceArr) {
   for(const e of sourceArr) { 
      if (!!e) {return true}
   }
   return false
};
