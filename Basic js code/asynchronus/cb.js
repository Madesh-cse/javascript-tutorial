
const fs = require("fs")

console.log("first line")

//let data = fs.readFileSync("file.txt")

//console.log("file 1  data ->" + data)

 fs.readFile("file.txt",cb1) // the parameter cb1 in reading method it hold the cb1 function actually it callback the cb1 function

function cb1(err,data){

    if(err){
        console.log(err)
    }

    console.log("the data 1 is ->" + data)
    fs.readFile("file1.txt",cb2) // the parameter cb1 in reading method it hold the cb1 function actually it callback the cb1 function
}
function cb2(err,data){

    if(err){
        console.log(err)
    }

    console.log("the data 1 is ->" + data)
    fs.readFile("file2.txt",cb3) // the parameter cb1 in reading method it hold the cb1 function actually it callback the cb1 function

}
 
function cb3(err,data){

    if(err){
        console.log(err)
    }

    console.log("the data 1 is ->" + data)
}

console.log("last line")



