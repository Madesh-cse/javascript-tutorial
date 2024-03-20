
//imperative writing
const a = 5

let square = a **2;

let isEven;

if(square%2===0){
    //console.log("the square vale is",square)
    isEven = true
}
else{
   // console.log("the not square vale is",square)

   isEven = false
}

console.log(isEven)

// decalarative writing



let chceckSquare = (x) =>( x*x % 2 ==0 ? true : false)

console.log(chceckSquare(2))



