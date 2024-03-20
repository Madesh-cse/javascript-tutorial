

let person1 = {

    Firstname : "madesh",

    lastName : "mohan",

    age : 21,

    
}

let PrintName = function(city){

    console.log(`My name is ${this.Firstname} ${this.lastName} and my age is ${this.age} and i am from ${city}`)
}


let person2 = {  
    Firstname : "Prem Kumar",

    lastName : "mohan",

    age : 24,

}

PrintName.call(person2,"Madurai") // for now the this keyword in perosnn 1 will point out to the person 2

PrintName.apply(person2,["Madurai"]) // apply method

PrintName.call(person1,"Madurai")

PrintName.apply(person1,["Madurai"])

// bind method

// it is used to store a function and later it will print a function

let myfun = PrintName.bind(person2,"Madurai");

console.log(myfun)

myfun()
