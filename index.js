const arr = [1, 2, 3, -9]
function mapToNegativize(array) {
    let res = []
    array.forEach(element => {
       res.push(element * -1)
    });
    return res
}
function mapToNoChange(array) {
    return array
    let res = []
    array.forEach(element => {
       res.push(-Math.abs(element))
    });
    return res
}
function mapToDouble(array) {
    let res = []
    array.forEach(element => {
       res.push(element * 2)
    });
    return res
}


function mapToSquare(array) {
    let res = []
    array.forEach(element => {
       res.push(Math.pow(element, 2))
    });
    return res
}


function reduceToTotal(sourceArray, startingPoint = 0) {
    let total = startingPoint
    for (let i = 0; i < sourceArray.length; i++ ) {
        total = total + sourceArray[i]
    }
    return total
}


function reduceToAllTrue (sourceArray) {
    for(let i = 0; i < sourceArray.length; i++) {
        if (!sourceArray[i])
         return false      
    }
    return true
}

function reduceToAnyTrue(sourceArray) {
    for(let i = 0; i < sourceArray.length; i++) {
        if (sourceArray[i])  return true
    }
    return false
}