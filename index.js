function mapToNegativize(sourceArray){
    return sourceArray.map(negatize)
}

function negatize(sourceArray){
    return sourceArray*(-1)
}

function mapToNoChange(sourceArray){
    return sourceArray
}

function mapToDouble(sourceArray){
    return sourceArray.map(double)
}

function double(sourceArray){
    return sourceArray*(2)
}

function mapToSquare(sourceArray){
    return sourceArray.map(square);
}

function square(sourceArray){
    return sourceArray*sourceArray
}



function reduceToTotal(sourceArray, startingPoint=0){
    const reducer = function(accumulator, currentValue){
        return accumulator + currentValue
    }
    return sourceArray.reduce(reducer, startingPoint)
}
     
    function reduceToAllTrue(sourceArray){
     for (const element of sourceArray){
     if (element == false){
     return false
     }} 
     return true
     
}

function reduceToAnyTrue(sourceArray){
    for (const element of sourceArray){
    if (element == true){
    return true
    }} 
    return false
    
}




