arr = [0,1]
next = 0
while((next+arr[0]+arr[1])<10){
  arr.unshift(next)
}
arr.sort((a,b) => a - b).unshift(0);


console.log(arr)
return arr