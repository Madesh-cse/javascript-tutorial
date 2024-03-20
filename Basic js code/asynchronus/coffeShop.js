
function Placeorder(drink){

    return new Promise(function(resolve,reject){

        if(drink==="Coffe"){
            resolve("order for coffe is received")
        }
        if(drink ==="Tea"){
            resolve(' The Tea order is placed')
        }
        else{
            reject("Other order is rejected")
        }
    })
}

function Process(order){
    return new Promise(function(resolve){
        console.log("order is being processed");
        resolve(` ${order} and served`)
    })
}


// Placeorder("Tea").then(function(OrderPlaced){ // orderPlaced = order for coffe is received
//     console.log(OrderPlaced)

//     let processWorking = Process(OrderPlaced)
//     // actually "orderPlaced hold the value = order for coffe is received" by using the process function we are  console.log("order is being processed")
//     return processWorking;

// }).then(function(PrintProcess){
//     console.log(PrintProcess)
// }).catch(function(err){
//     console.log(err)
// }) // chaining pf promise

// Async Await - keywords
// it works exactly like a promise but the syntax is very easy and it always start with a function

async function serveOrder(){

    try {

        let orderItem =  await Placeorder('Tea')
        console.log(orderItem)
    
        let Processing = await Process(orderItem)
        console.log(Processing)
        
    } 
    
    catch (error) {
        console.log(error) 
    }

   
}

serveOrder()