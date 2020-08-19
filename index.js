// Your code here

function mapToNegativize(sourceArray) {
    let ray = []
    for (let i = 0; i < sourceArray.length; i++) {
        let neg = sourceArray[i] * -1;
        ray.push(neg)
    }
    return ray
}

function mapToNoChange(sourceArray) {
    return sourceArray
}

function mapToDouble(sourceArray) {
    let ray = []
    for (let i = 0; i < sourceArray.length; i++) {
        let dub = sourceArray[i] * 2;
        ray.push(dub)
    }
    return ray
}

function mapToSquare(sourceArray) {
    let ray = []
    for (let i = 0; i < sourceArray.length; i++) {
        let sqr = sourceArray[i] ** 2;
        ray.push(sqr)
    }
    return ray
}

function reduceToTotal(sourceArray, startingPoint=0) {
    let total = startingPoint
    for (let i = 0; i < sourceArray.length; i++) {
        total = total + sourceArray[i]
    }
    return total
}

function reduceToAllTrue(sourceArray) {
    for (let i = 0; i < sourceArray.length; i++) {
       if (!sourceArray[i]) return false
    }
    return true
}

function reduceToAnyTrue(sourceArray) {
    for (let i = 0; i < sourceArray.length; i++) {
        if (sourceArray[i]) return true
     }
     return false
 }
 