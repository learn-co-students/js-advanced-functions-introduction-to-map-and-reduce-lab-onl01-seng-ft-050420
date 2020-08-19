// Your code here
const mapToNegativize = sourceArray => {
    let negativeArray = []
    sourceArray.forEach((element) => {
        let result = element * -1
        negativeArray.push(result)
    })
    return negativeArray
}

const mapToNoChange = sourceArray => {
    return sourceArray
}

const mapToDouble = sourceArray => {
    let doubledArray = []
    sourceArray.forEach((element) => {
        let result = element * 2
        doubledArray.push(result)
    })
    return doubledArray
}

const mapToSquare = sourceArray => {
    let squaredArray = []
    sourceArray.forEach((element) => {
        let result = element**2
        squaredArray.push(result)
    })
    return squaredArray
}

const reduceToTotal = (sourceArray, init = 0) => {
    let total = init
    sourceArray.forEach((element) => {
        total += element
    })
    return total
}

const reduceToAllTrue = sourceArray => {
    let result = true
    sourceArray.forEach((element) => {
        if (Boolean(element) == false) {
            result = false
        }
    })
    return result
}

const reduceToAnyTrue = sourceArray => {
    let result = false
    sourceArray.forEach((element) => {
        if (Boolean(element) == true) {
            result = true
        }
    })
    return result
}