// arrow function basic syntax

// const addOne = (num1 ,num2) => {
//     return num1 + num2     //if we use curly brackets we have to use return keyword
// } //this called explicit return

// const addOne = (num1 ,num2) => num1 + num2  //its called implicit return
// const addOne = (num1 ,num2) => (num1 + num2)   //we can write like this also

const addOne = (num1 ,num2) => ({username:"sanu"}) //if we wnt to return the obj
console.log(addOne(8, 2))

