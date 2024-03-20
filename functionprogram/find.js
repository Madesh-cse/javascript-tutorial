//Find returns the first element of an array that satisfy the condition


let transction = [1000,3000,4000,6000,-343,43,-54,7]

const newarray = transction.find((n) =>{
    return n<0;
})

console.log(newarray)

const newarray1 = transction.findIndex((n) =>{
    return n<0;
})

console.log(newarray1)