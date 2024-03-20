let Bio = {
    Name : "Madesh",

    qualifucation : "degree",

    job : "no"
}

for(let about in Bio){

    console.log(about)
    console.log(about + "->" + Bio[about])   // forinloop the key  is access by variable
}

let bio = ["madesh","Degree","no"]

for(let About in bio){
    console.log(About)  
    console.log(About + "->" + bio[About])  // forinloop the index is access by variable
}

for(let About of bio){
    console.log(About)
}

// The difference between the forinloop and forofloop is

// in forinloop the variable in only refer the key in object


// in forinloop the variable in only refer the index  in array