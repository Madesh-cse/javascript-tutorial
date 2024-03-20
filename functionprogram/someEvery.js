// some method
// Some: Conditon Check: To get true or false based on a condition
//it will return true if even 1 element satisfies the condition

const transactions = [-1000, -3000, 4000, -2000,  -898, -3800, -4500];

let result = transactions.some((n) =>{
    return n>0; 
})
console.log(result)


// Every Method

// Every: Conditon Check: To get true or false based on a condition

//it will return true if all the element satisfy the condition


const arr = [2,4,6,8,12,10]

let newarr = arr.every((n) => {
    return n%2==0
})

console.log(newarr)