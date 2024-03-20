
// poly => many

// morph => forms  => polymrrphism means a same method is defined in differnt class but each methdd has a diifernt function work

// ism => method


class Animal{

    sound(){

        console.log("Animal make a diifernt sounds")
    }
}
class Dog{

    sound(){

        console.log("Dog Barks")
    }
}
class Cat{

    sound(){

        console.log("Cat Meows")
    }
}

let Animal1 = new Animal();

let tommy = new Dog();

let mad = new Cat();

tommy.sound();

mad.sound()

Animal1.sound();


class Hotel{

    Waiter(){
        console.log("What do you want")
    }
}
class OrderFood{

    Waiter(){
        console.log("Can i have a one plate of chicken briyani")
    }
}
class Bill{

    Waiter(){
        console.log("What is Total Cost of the bill")
    }
}

let customer = new Hotel();

let customer1 = new OrderFood();


customer.Waiter()

customer1.Waiter()
