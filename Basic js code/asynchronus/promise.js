

let Mypromise = new Promise(function(resolve,reject){

    const a = 3

    const b = 4

    setTimeout(() =>{

        if(a===b){
            resolve(`The value of ${a} and ${b} are equal`)
        }
        else{
            reject(`The value of ${a} and ${b} are not equal`)
        }
    },1000)
})
//pending
//console.log(Mypromise)

Mypromise.then(function(result){ // then method is used to retrun a promise from the asyn function

    console.log(result)
})

Mypromise.catch(function(failedans){
    console.log(failedans)
})

