let a = ""

if(a){
    console.log("I am truthy")
}
else{
    console.log("I am falsy")
}

//  false
// NaN
// "",'',`` (empty string)
// 0 zero
// -0 minus zero
// undefined
//0n (BigInt zero) => falsy value




(function(){
    if((-100 && 100 && "0")||[] == true || 0){
        console.log("True")

        if( [] ||  (0 && "false")){
            console.log(2)
        }
        if( Infinity &&  NaN && "false"){
            console.log(3);
            if(""){
                console.log(4)
            }
        }
        else{
            console.log(5)
            if(({}|| false === "") && !(null && undefined)){
                console.log(6)
            }
        }
    } 
}) 
()
