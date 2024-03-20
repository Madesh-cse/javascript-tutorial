let firstname = {

    name:"madesh",
    age:18,

    address :{  // we try to access the nested object like the same spread operator it will become more complex and and it take more time
        city:"Madurai",
        state :"TamilNadu"
    }
}

let secondname = JSON.parse(JSON.stringify(firstname)); // deep copy
//JSON.parse is used to convert the web data into js object
secondname.address.city = "Chennai"
console.log(firstname);
console.log(secondname)
