// Your code here
function mapToNegativize(sourceArray) {
  let arr = []
  for (const n of sourceArray) {
    arr.push(0 - n)
  }
  return arr
}
function mapToNoChange(sourceArray) {
  let arr = []
  for (const n of sourceArray) {
    arr.push(n)
  }
  return arr
}
function mapToDouble(sourceArray) {
  let arr = []
  for (const n of sourceArray) {
    arr.push(n * 2)
  }
  return arr
}
function mapToSquare(sourceArray) {
  let arr = []
  for (const n of sourceArray) {
    arr.push(n **2)
  }
  return arr
}
function reduceToTotal(sourceArray, startingPoint) {
  let sum = startingPoint || 0
  for (const n of sourceArray) {
    sum += n
  }
  return sum
}
function reduceToAllTrue(sourceArray) {
  let result = false
  for (const v of sourceArray) {
    if (v) {
      result = true
    } else {
      return false
    }
  }
  return result
}
function reduceToAnyTrue(sourceArray) {
  for (const v of sourceArray) {
    if (v) {
      return true
    }
  }
  return false
}
