// Your code here
function mapToNegativize(sourceArray) {
  const newArray = [];
  sourceArray.forEach(num => newArray.push(num * -1));
  return newArray;
}

function mapToNoChange(sourceArray) {
  const newArr = [];
  sourceArray.forEach(num => newArr.push(num));
  return newArr;
}

function mapToDouble(sourceArray) {
  const newArr = [];
  sourceArray.forEach(num => newArr.push(num * 2));
  return newArr;
}
function mapToSquare(sourceArray) {
  const newArr = [];
  sourceArray.forEach(num => newArr.push(num ** 2));
  return newArr;
}

function reduceToTotal(sourceArray, startingPoint = 0) {
  sourceArray.forEach(num => startingPoint += num);
  return startingPoint;
}

function reduceToAllTrue(sourceArray) {
  let isTrue = true;
  sourceArray.forEach(el => {
    if (!!el === false) {
      isTrue = false;
    };
  });
  return isTrue;
}

function reduceToAnyTrue(sourceArray) {
  let isTrue = false;
  sourceArray.forEach(el => {
    if (!!el === true) {
      isTrue = true;
    };
  });
  return isTrue;
}
