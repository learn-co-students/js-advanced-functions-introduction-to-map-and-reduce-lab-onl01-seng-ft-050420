function mapToNegativize(array) {
    return array.map(x => -x);
}

function mapToNoChange(array) {
    return array;
}

function mapToDouble(array) {
    return array.map(x => x * 2);
}

function  mapToSquare(array) {
    return array.map(x => x**2);
}

function reduceToTotal(array, starting=0) {
    return array.reduce((total, cur ) => {return cur + total}, starting)
}

function reduceToAllTrue(array) {
    for (const el of array) {
        if (!el){
            return false;
        }
    }
    return true;
}

function reduceToAnyTrue(array) {
    for (const el of array) {
        if (!!el){
            return true;
        }
    }
    return false;
}