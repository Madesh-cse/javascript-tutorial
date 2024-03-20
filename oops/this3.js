//console.log(this) => window object

//console.log(this);

// function => window object 

function myfun(){

    console.log(this)
}

//myfun()

let Myobj = {    // this keyword which "refer" to "its object" whent is define inside a function in a object
    name:"madesh",

    age : 14,

    myFun : function(){
        console.log(this)
    }
}

//Myobj.myFun()

let Myobj1 = {   // window object
    name:"madesh",

    age : 14,

    myFun2 : function(){
       
        function  myfun3() {
            console.log(this)
        }myfun3()
    }
}
Myobj1.myFun2()