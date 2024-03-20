

let a = 10 // external factor
/// impure function

// its tak about the external factor which affect the actucal code 
function add(x){
    console.log(a+x)
    a++;
}

add(2)
add(2)
add(2)


// pure function
 // its talk about the same input give a same output
function impure(x,a){
   // console.log(x+a) console.log is a external resourse

   return x+a;
}

console.log(impure(20,30))