// setTimeout(cb,second);


function greet(){

    console.log("I am madesh")
}

setTimeout(greet,5000)



let time = setInterval(myTimer ,1000)


setTimeout(function(){
    clearInterval(time)
},3000)

function myTimer(){

    const d = new Date()

    console.log(d)
}

const number = [10,20.30,40];

let newNumber = number.map(function(e){

    return e*2
})
console.log(newNumber)