function mapToNegativize(sourceArray) {
    const ary = []
    sourceArray.forEach(num => ary.push(num * -1))
    return ary
}

function mapToNoChange(sourceArray) {
    const ary = []
    sourceArray.forEach(num => ary.push(num))
    return ary
}

function mapToDouble(sourceArray) {
    const ary = []
    sourceArray.forEach(num => ary.push(num * 2))
    return ary
}

function mapToSquare(sourceArray) {
    const ary = []
    sourceArray.forEach(num => ary.push(num ** 2))
    return ary
}

function reduceToTotal(sourceArray, startingPoint=0) {
    sourceArray.forEach(num => startingPoint += num)
    return startingPoint
}

// function reduceToTotal(sourceArray, startingPoint=0) {
//     for (let i = 0; i < sourceArray.length; i++ ) {
//         startingPoint = startingPoint += sourceArray[i]
//     }
//     return startingPoint
// }

function reduceToAllTrue(sourceArray) {
    for (let i = 0; i < sourceArray.length; i++ ) {
        if (!sourceArray[i]) return false
    }
    return true
}

function reduceToAnyTrue(sourceArray) {
    for (let i = 0; i < sourceArray.length; i++ ) {
        if (sourceArray[i]) return true
    }
    return false
}