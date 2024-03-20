
function printfirstname (firstname,cb){    /// cb is call back function . when the cb hold the value of function Printlastname
    // whenever your are callback the cb function(mohan) actually you are calling the printLatname function lastname(mohan)
    console.log(firstname)
    cb("mohan")
}

printfirstname("Madesh", printlastname)


function printlastname(lastname){
    console.log(lastname)
}



const isNum = (n)=>{
    return n%2==0
}

let Callback = (EveNum,num) =>{ //  eveNum which hold a isNum function a  paramater
    let isNumEven = EveNum(num)
    console.log(`the number is ${num} is even number  ${isNumEven}`)
}



Callback(isNum,12) // callBack 

console.log(1<2<3)

console.log(3>2>1)
 
