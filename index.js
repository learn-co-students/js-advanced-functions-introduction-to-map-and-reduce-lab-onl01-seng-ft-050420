// Your code here
function mapToNegativize(sourceArray) {
   return sourceArray.map(num => num*(-1))
    
};

function mapToNoChange(sourceArray) {
   return sourceArray.map(e => e)
};

function mapToDouble(sourceArray) {
   return sourceArray.map(num => num*2)
};

function mapToSquare(sourceArray) {
   return sourceArray.map(num => num**2)
};

function reduceToTotal(sourceArr, starttingPoint = 0) {
   return sourceArr.reduce( function (total, currentValue){return total + currentValue}, starttingPoint)
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
