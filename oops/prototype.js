let myObj = {}

console.log(myObj)

let person1 = {

    name : "Madesh",

    age:19,

   
}

console.log(person1)    

console.log(person1.hasOwnProperty("age")) // hasownproperty is used to return true if it is find the propery in object otherwise return false

function Detail(_name,_age){

    this.name = _name

    this.age = _age

}

let customer2 = new Detail("Maddesh", 21)

console.log(customer2)

let customer4 = new  Detail("ram",13)

console.log(customer4)