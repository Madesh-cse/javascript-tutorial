
function test(){

    let  a = 2

    function test1(){

        console.log(a)
    }

    return test1
}


let fun = test()
console.log(fun)

fun()


function Myname(){ // lexical scoping

    let Name = "Madesh"

    function getname(){

        console.log(Name)

        let age = 19

        function getage(){
            console.log("my age is " + age + " " +  Name)
        }
        return getage
    }


    return getname
}

let g1 = Myname()

//g1() // getname when you are callling you are calling the (getname)

let g2 = g1()
console.log(g2)
g2() // getage