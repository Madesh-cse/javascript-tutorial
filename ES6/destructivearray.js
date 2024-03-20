

let arr = ["madesh","from","madurai","tamilandu","india"]

console.log(arr[1])


 arr.push("annaNagar")

console.log(arr)

arr.unshift("home")

console.log(arr)


// By using destructive array we can obtain the each element  with defining a array with a value

let [a,b,c,d,e] = arr

console.log(d)


// destructing in object

// in object distructing the object is by defining the same key value

let obj = {
    Name: "Madesh",

    place : "vaigai colony",

    district : "madurai",

     address : {
        mad:"141 vaigain colong east annanagar madurai 20",

        country : "india",

        city : "chennai"
    }
};

console.log(obj)

let{Name:n,place,district ,address:{country : o}} = obj


console.log(n)

console.log(place)

console.log(district)

console.log(o)


//console.log(obj.place)

// using desstructive 

//for(let about in obj){
   // console.log(about+ "->"+obj[about])
//}

