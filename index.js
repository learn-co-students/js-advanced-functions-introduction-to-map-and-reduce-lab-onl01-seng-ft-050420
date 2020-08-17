// map-like methods
// using forEach
function mapToNegativize(sourceArray) {
  let newArray = []
  sourceArray.forEach((el) => {
    newArray.push(el * -1)
  })
  return newArray
}

function mapToNoChange(sourceArray) {
  let newArray = []
  sourceArray.forEach((el) => {
    newArray.push(el)
  })
  return newArray
}

// using for loops
function mapToDouble(sourceArray) {
  let newArray = []
  for (let i = 0; i < sourceArray.length; i++) {
    newArray.push(sourceArray[i] * 2)
  }
  return newArray
}

function mapToSquare(sourceArray) {
  let newArray = []
  for (let i = 0; i < sourceArray.length; i++) {
    newArray.push(sourceArray[i] * sourceArray[i])
  }
  return newArray
}

// reduce-like methods
// using forEach
function reduceToTotal(sourceArray, startingPoint) {
  if (!startingPoint) {
    let total = 0
    sourceArray.forEach((el) => {
      total = total + el
    })
    return total
  } else {
    sourceArray.forEach((el) => {
      startingPoint = startingPoint + el
    })
    return startingPoint
  }
}

// using for loops
function reduceToAllTrue(sourceArray) {
  let newArray = []
  for (let i = 0; i < sourceArray.length; i++) {
    if (!!sourceArray[i]) {
      newArray.push('true')
    } else {
      newArray.push('false')
    }
  }
  return newArray.includes('false') ? false : true
}

function reduceToAnyTrue(sourceArray) {
  let newArray = []
  for (let i = 0; i < sourceArray.length; i++) {
    if (!!sourceArray[i]) {
      newArray.push('true')
    } else {
      newArray.push('false')
    }
  }
  return newArray.includes('true') ? true : false
}
