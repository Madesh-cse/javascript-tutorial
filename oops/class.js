
class person{  // class is nothing but it is simlar to constructor function

    constructor( name,age){
        this.name = name;
        this.age = age
    }

    welcome(){
        console.log(`welcome ${this.name}`);
    }
}

let person1 = new person("ramesh",19);
let person2 = new person("pravin",19);
let person3 = new person("naveen",19);
let person4 = new person("ram",19);

person1.welcome()

console.log(person1);
console.log(person2);
console.log(person3);

