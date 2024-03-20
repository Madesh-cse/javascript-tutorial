'use strict'

console.log(this)  // Empty object

// funtion -> undefine

function myfun(){
    console.log(this)
}
myfun()

// object -> function => object itself

let Myobj = {   // this keyword which "refer" to "its object" whent is define inside a function in a object
    name:"madesh",

    age : 14,

    myFun : function(){
        console.log(this.name)
    }
}

Myobj.myFun()


//obj-> fun -> fun => undefine

let Myobj1 = {   // global itself
    name:"madesh",

    age : 14,

    myFun2 : function(){
       
        function  myfun3() {
            console.log(this)
        }
        myfun3()
    }
}
Myobj1.myFun2()