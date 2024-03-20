
//var  a = 10

//var a =20

//console.log(a)

//if(a==20){
    //var b = 40
    //console.log(b)
//}
// variable declared in a var keyword are not blocked scoped but it is a function scoped
//console.log(b)//


var  a = 10

var a =20

console.log(a)


if(a==20){
    let b = 40
    console.log(b)
}
// variable declared as let keyword it act a blocked scoped 




function add(){
    let c = 40
    console.log(c)
}

add()
console.log(c)