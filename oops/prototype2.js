
function Person(_name,_age){

    this.name = _name

    this.age = _age


    Person.prototype.welcome = function(){

        console.log(`My name is ${this.name} and my age is ${this.age}`)
    }

}

let person1 = new Person("madesh", 32);

let person2 = new Person("prem kumar", 32);

console.log(person1.welcome())

console.log(person2)




