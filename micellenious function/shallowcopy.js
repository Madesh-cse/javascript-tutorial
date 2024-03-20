// its talk about the spread operator{...}

let firstname = {

    name:"madesh",
    age:18,

    address :{  // we try to access the nested object like the same spread operator it will become more complex and and it take more time
        city:"Madurai",
        state :"TamilNadu"
    }
}

let secondname = {...firstname} // shallow copy // spread opearator is used to copy 

secondname.name = "prem"
secondname.age = 24
 
console.log(firstname)
console.log(secondname)


let arr = [1,2,3,4,5,6]

let arr1 = [...arr]
console.log(arr1)