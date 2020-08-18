// Your code here

function mapToNegativize(arr){
  let newArr = []
  arr.forEach((num)=>{
    newArr.push(num*-1)
  })
  return newArr
}

function mapToNoChange(arr){
  let newArr = []
  arr.forEach((num)=>{
    newArr.push(num)
  })
  return newArr
}
function mapToDouble(arr){
  let newArr = []
  arr.forEach((num) => {
    newArr.push(num*2)
  })
  return newArr
}

function mapToSquare(arr){
  let newArr = []
  arr.forEach((num) => {
    let sq = num * num
    newArr.push(sq)
  })
  return newArr
}

function reduceToTotal(arr,init=0){
  let tot = init
  arr.forEach((n)=>{
    tot += n
  })
  return tot
}

function reduceToAllTrue(arr){
   let bool = true
   arr.forEach((el) => {
     console.log(!el)
    if(!el){
     return bool = false
    }
  })
  return bool
}

function reduceToAnyTrue(arr){
  let bool = false
  arr.forEach((el) => {
    if(el){
     return bool =  true
    }
  })
  return bool
}