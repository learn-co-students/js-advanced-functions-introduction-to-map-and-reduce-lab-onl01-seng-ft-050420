// Your code here
const mapToNegativize = (sourceArray) => {
   return sourceArray.map( num => {
      return  (num * -1)
    })
}

const mapToNoChange = (sourceArray) => {
    return sourceArray.map( num => {
        return num 
    })
}

const mapToDouble = (sourceArray) => {
    return sourceArray.map( num => {
        return num * 2
    })
}

const mapToSquare = (sourceArray) => {
    return sourceArray.map( num => {
        return num ** 2
    })
}

const reduceToTotal = (sourceArray, startingValue = 0) => {
    const reducer = (acc, currentValue) => acc + currentValue
    return sourceArray.reduce(reducer, startingValue)
}


const reduceToAnyTrue = (sourceArray) => {
    let reducer = function(acc, currentValue) {
        // if (!!acc || !!currentValue) {
            return acc + currentValue
        // }
        // else {
        //     return false 
        // }
    }
    return !!sourceArray.reduce(reducer)
}
// sourceArray = [1, 2, true, "razmatazz"]
const reduceToAllTrue = (sourceArray) => {
    let reducer = function(acc, currentValue) {
        debugger
        if (!acc) {
            return false 
        }
        else if (!currentValue) {
            return false 
        }
        else {
            return !!acc + !!currentValue
        }
    }
    return !!sourceArray.reduce(reducer)
}
    