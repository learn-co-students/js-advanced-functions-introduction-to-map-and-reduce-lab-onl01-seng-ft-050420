// Your code here
function mapToNegativize(sourceArray){
    return sourceArray.map((num) => num * -1)
}

function mapToNoChange(sourceArray){
    return sourceArray.map(num => num)
}

function mapToDouble(array){
    return array.map(num => num * 2)
}

function mapToSquare(array){
    return array.map(num => num * num)
}


function reduceToTotal(array, startingPoint=0) {
    return array.reduce((acc, val) => {
        return acc + val
    }, startingPoint)
}

function reduceToAllTrue(src) {
    for (let i = 0; i < src.length; i++ ) {
      if (!src[i]) return false
    }
    return true
  }
  
  function reduceToAnyTrue(src) {
    for (let i = 0; i < src.length; i++ ) {
      if (src[i]) return true
    }
    return false
  }