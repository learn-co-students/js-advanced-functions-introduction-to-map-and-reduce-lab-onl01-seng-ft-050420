const mapToNegativize = sourceArray => {
    let negatives = sourceArray.map(function(e){ 
        if (e > 0){
            return -Math.abs(e)
        } else {
            return Math.abs(e)
        }})
    return negatives;
};

const mapToNoChange = sourceArray => {
    let same = sourceArray.map(e => e);
    return same; 
};

const mapToDouble = sourceArray => {
    let double = sourceArray.map(e => e * 2);
    return double;
};

const mapToSquare = sourceArray => {
    let square = sourceArray.map( e => e * e);
    return square; 
}

const reduceToTotal = (sourceArray,startingPoint = 0) => {
    let reduced = sourceArray.reduce((acc,total) => acc + total, startingPoint);
    return reduced;
};

const reduceToAllTrue = sourceArray => {
    for (let i = 0; i < sourceArray.length; i ++){
        if(!sourceArray[i]) return false 
    }
    return true 
};

const reduceToAnyTrue = sourceArray => {
    for (let i = 0; i < sourceArray.length; i ++) {
        if (sourceArray[i]) return true 
    }
    return false 
}