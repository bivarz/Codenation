'use strict'

const fibonacci = () => {
    let arr = [0,1]
var n1 =arr[0]
var n2 =arr[1]
let next = 0

while(next<350){
  next = n1+n2
  n1 = n2
  n2 = next
  arr.push(next)
}
console.log(arr)
return arr
 
}

const isFibonnaci = num => 
  num === 1
    ? true
    : !!fibonacci().find(elementNum => elementNum === num)

module.exports = {
  fibonacci,
  isFibonnaci
}