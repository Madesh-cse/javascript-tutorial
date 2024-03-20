

function Foodorder(food){

    return new Promise(function(resolve,reject){
        
        if(food === "Chicken Briyani"){
            resolve("We have a briyani sir")
        }

         if(food === "Chicken Noodles"){
            resolve("We have your noodles wait for 10 minutes")
        }
        else{
            reject("Other order is not accepted")
        }
    })

}


function OrderProcess(order){

    return new Promise(function(resolve){
        console.log("the order is in process wait for few minutes");
        resolve(`${order} has been ready and enjoy your food`)
    })
}

Foodorder("Chicken Koothu Parotta").then(function(PlacedOrder){ // placeorder = We have a briyani sir
    console.log(PlacedOrder)

    let FoodItem = OrderProcess(PlacedOrder)

    return FoodItem;
}).then(function(OurFood){
    console.log(OurFood)
}).catch(function(err){
    console.log(err)
})

let a = []

console.log(typeof(a))

