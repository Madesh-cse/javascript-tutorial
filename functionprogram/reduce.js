

let num = [1,2,3,4,5,6,7,8,9]

let sum = 0;

for(i=0;i<num.length;i++){
    sum = sum + num[i]
}

console.log(sum)


// reduce method()

// reduce method return a single value output not a new array or anything just a single value

let numSum =[1,2,3,4,5,6,7,8,9]

//let result = numSum.map(function(acc,value)
let result = numSum.reduce(function(acc,value){

    let sumResult = acc + value
    return sumResult

},0)
console.log(result)

let product = [3,4,5,6,7]

let Result = product.reduce(function(acc,value){

    let productesult = acc * value
    return productesult
},1)

console.log(Result)