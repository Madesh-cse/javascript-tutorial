

// what is encapsulation ?

// so the main thing is used to hide a important id to outsie environment "if you want to aceess you need to specify the particular function"
function person(_name,_age){

    var name = _name

    this.age = _age

    this.getname = function(){
        return name
    }
}

let person1 = new person("Madesh",22);

//person1.name ="premkumar"

console.log(person1.getname())


class customer2{

    constructor(_food,_price,_tax){

        this.name = _food;
        this.price = _price;
        var tax = _tax

        this.GetTax =function(){

            return tax
        }

    }

    review(){
        console.log(`${this.name} is very delicious`) 
    }

}

class customer3 extends customer2{

    constructor(_food,_price,_tax,_waterBottle){

        super(_food,_price,_tax)

        this.waterBottle = _waterBottle
    }

    review(){
        console.log(`${this.name} is under cooked is must be better`) 
    }
}

let FoodName1 = new customer2("chcicken Noodles","6$","1$");

console.log(FoodName1)

console.log(FoodName1.GetTax())

FoodName1.review()


let FoodName2 = new customer3("chcicken Noodles","6$","1$","2$");

console.log(FoodName2)

FoodName2.review()