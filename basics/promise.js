// const prOne= new Promise (function (resolve,reject){
//     setTimeout(function(){
//         console.log("asyn complete");
//         resolve()},5000)
// })
// prOne.then(function(){
//     console.log("promise resolved");
    
// })

const prTwo= new Promise (function (resolve,reject){
    setTimeout(function(){
        console.log(" 2nd asyn complete");
        resolve()},5000)
})
prTwo.then(function(){
    console.log("promise resolved");
    
})