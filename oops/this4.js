'use strict'

//console.log(this)  // => window object


function myfun(){
    console.log(this)
}

myfun()  // undefine


let Myobj = {
    name:"madesh",

    age : 14,

    myFun : function(){
        console.log(this)
    }
}

Myobj.myFun() // object itself

let Myobj1 = {   // undefine
    name:"madesh",

    age : 14,

    myFun2 : function(){
       
        function  myfun3() {
            console.log(this)
        }myfun3()
    }
}
Myobj1.myFun2()