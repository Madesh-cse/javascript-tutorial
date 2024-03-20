
let arr = [1,2,3,4,5]

for(i = 0; i<arr.length; i++){

    let square = arr[i]**2;

    console.log(square)
}
console.log(arr)


// map 

// Map will loop through every elemet of your array and will perform specific operations that you have prrovided

// map method will always return you a new array with your results

const num = [1,2,3,4,6,7]

const SquareNum = num.map(function(n){
    return  n*n
})
    console.log(num)
console.log(SquareNum)

// map

const transction = [1000,2000,3000,4000,-894,3800,-4500];

const intoDolllar = 80;

let rupesstodollar = transction.map((amount) => {
    return amount/intoDolllar
})

console.log(rupesstodollar)

// foreach method is similar to the map but one difference in map it returns a value in a new array 

// but in foreach is cannot  return instead it print a "new value" not a new array  or object


let rupesstodollar1 = transction.forEach((amount) => {
  console.log(amount/intoDolllar) 
})




