
function person(name,address,gender){ // constructor function
    this.Name = name;
    this.address = address;
    this.gender = gender
}

// create a object which is used to execute a constructor function
let value =  new person("madesh", 151,"g") // new is used to create a object and it points to this keyword(object)

let value1 =  person("prem", 151, "g")

console.log(value)

console.log(value1)