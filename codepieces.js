//flatten nested arrays with recursion
const donutShop =[
  [
    'firecracker',
    'chocolate',
    'blueberry'
  ],
  [
    ['orange', 'applecrumble'],
    ['cream', 'peanutbutter', 'coconut']
  ],
  [
    [
      [
        [
          ['flavor of the week']
        ], ['ihatethis']
      ]
    ]
  ]
]

function flattenData(arr){
  let flattened = []
  for (let i=0; i<arr.length; i++){
    if(Array.isArray(arr[i])){
     flattened = flattened.concat(flattenData(arr[i]))
    }else{
      flattened.push(arr[i])
    }
  }
  return flattened
}
let flatArr = flattenData(donutShop)
console.log(flatArr)
for(index in flatArr){
  if(flatArr[index].includes("applecrumble")){
    console.log("Here is your donut", index, flatArr[index])

  }
}

//a normal countdown function
function countDown(n){
    for(let i=n; i>0; i--){
        console.log(i)
    }
    console.log("Hooray")
}
console.log(countDown(10))

//the recursive version
function recursiveCountDown(n){
    if(n<=0){
        console.log("Hooray!!")
        return
    }else{
        console.log(n)
        recursiveCountDown(n-1)
    }
}
console.log(recursiveCountDown(10))

//add a range of numbers
function sumRange(n){
    let total = 0
    for(let i=0; i<=10; i++){
        total += i
    }
    return total
}
console.log(sumRange(10))

//recursive add a range of numbers
function recursiveAddARange(n, total=0){
    if(n <= 0){
        return total
    }else{
        return recursiveAddARange(n-1, total + n)
    }  
}
console.log('total', recursiveAddARange(10))