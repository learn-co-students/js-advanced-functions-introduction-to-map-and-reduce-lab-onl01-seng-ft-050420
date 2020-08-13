function mapToNegativize(array){
    return array.map(x => x * -1)
}
function mapToNoChange(array){
    return array
}

function mapToDouble(array){
    return array.map(x => x * 2)
}
function mapToSquare(array){
    return array.map(x => x **2)
}


function reduceToTotal(array, start = 0){
    let total = start
    for (let x of array){
        total = total + x
    }
    return total
}
function reduceToAllTrue(array){
    for (let x of array){
        if (!!x === false){
            return false
        }
    }
    return true

}
function reduceToAnyTrue(array){
    for (let x of array){
        if (!!x === true){
            return true
        }
    }
    return false
}
