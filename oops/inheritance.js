
// waht is inheritance ?

// method or properties from base class can be put down or can be passed to the derived class


class person{
    constructor(_name,_age){
        this.name = _name
        this.age = _age
    }

    welcome(){
        console.log(` hello ${this.name}`);
    }
}

class teacher extends person{

    constructor(_name,_age,_studentStrength){
        super(_name,_age)
        this.studentStrength = _studentStrength
    }

    test(){
        super.welcome()
    }
}

class student extends person{

    constructor(_name,_age,_cgpa){
        super(_name,_age,_cgpa)
        this.mark = _cgpa
    }
}

let person1 = new person("madesh",19)

console.log(person1)

let Teacher = new teacher("mam",34,42)

console.log(Teacher)

Teacher.test()

let Student = new student("ram",13,8.56)

console.log(Student);





