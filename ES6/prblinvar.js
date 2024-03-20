

var  a = 10

var a =20

console.log(a)

if(a==20){
    var b = 40
    console.log(b)
}
// variable declared in a var keyword are not blocked scoped but it is a function scoped
console.log(b)

function add(){
    var c = 50;
    console.log(c)

}
add()

console.log(c)


// let vs var


