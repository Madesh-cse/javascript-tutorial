
// curring => it is a application of closure 


// function addTwoNumber(a,b){

//     console.log(a+b)
// }
// addTwoNumber(2,3)


let sum = function(x){

    return function(y){
        console.log(x+y)
    }
}

let add = sum(2)
console.log(add)

add(7)
