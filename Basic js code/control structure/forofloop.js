// The difference between the forinloop and forofloop is

// in forofloop the object cant be iterate beacuse it is not iterable item in forofloop

// in forofloop the variable in only refer the value in array



let Bio = ["madesh","Degree","no"]

// basic forloop
for(let i = 0; i<Bio.length; i++){
    console.log(Bio[i]);
}

for(let about of Bio){
    console.log(about);
}

// how to acces the index of   array in forofloop

// entries()-method

for(let [index , about]of Bio.entries()){
    console.log(index + "->" + about)
}

var str = "madesh"

for(var s of str){
    console.log(s)
}