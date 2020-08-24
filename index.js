// Your code here
function mapToNegativize(sourceArray){
  return sourceArray.map(element => element * -1);
}
function mapToNoChange(sourceArray){
  return sourceArray.map(element => element )
}
function mapToDouble(sourceArray){
  return sourceArray.map(element => element * 2);
}
function mapToSquare(sourceArray){
  return sourceArray.map(element => element * element);
}


function reduceToTotal(sourceArray, startingPoint = 0){
  return sourceArray.reduce(function(total, element){return total += element},startingPoint);
}
function reduceToAllTrue(sourceArray){
  return sourceArray.reduce(function(state, element){
    if (!state){
      return false
    }else{
      state = !!element;
    }
    return state;
  })
}
    
    
    
function reduceToAnyTrue(sourceArray){
  return sourceArray.reduce(function(state, element){
    if (!!state){
      return true
    }else{
      state = !!element;
    }
    return state;
  })
}









