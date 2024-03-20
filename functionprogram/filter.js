
 let arr = [2,4,6,7,8,10]

 let newarr =[]

 for(i=0;i<arr.length;i++){
    if(arr[i]%2==0){
        newarr.push(arr[i]);
    }
 }

 console.log(newarr)

 // filter method

 // filter return a new array it will return all those element the matches the specific condition

 // if the ccondition true  it will return the element for the condition and if it is false it will discard the element


 let filter = [2,4,6,7,8,10]

 let newarr1 = filter.filter((n) =>{
    return (n%2==0)
 })
 console.log(newarr1)


 let transactions = [10000,3000,4000,5000,-5000,6000,-7000]

 let withdraw = transactions.filter((amount) =>{
    return amount>0;
 })

 console.log(withdraw)