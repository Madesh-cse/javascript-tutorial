
const arr = [
    {
        name : "A",
        age : 23,
        gender : "M"
    },
    {
        name : "B",
        age : 44,
        gender : "F"
    },
    {
        name : "C",
        age : 45,
        gender : "M"
    },
    {
        name : "D",
        age : 32,
        gender : "F"
    },
    {
        name : "E",
        age : 15,
        gender : "M"
    },
    {
        name : "F",
        age : 20,
        gender : "F"
    }
]

// display all the age for the men

let result = arr.filter(function(obj){
    return obj.gender == "M"
}).map(function(male){
   return male.age
})


console.log(result)

let transction = [1000,3000,4000,-849,-324,2000,3800]

let postiveTrancation = transction.filter((amount) => {
    return amount > 0
}).reduce(function(acc,value){
    let totalAmount = acc + value;

    return totalAmount
    
},0)

console.log(postiveTrancation)

