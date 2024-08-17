const myArr=[12,22,33,44,55,77]
const myHeros=["shaktiman","nagraj"]
const myNumber=(1,2,3,4,5,6)
// console.log(myArr[2]);

//array methods

// myArr.push(5)
// myArr.push(29)
// myArr.push(22)  
// myArr.pop()             //remove last entered value

myArr.unshift(9)         //adds 9 numb in starting of array
myArr.shift()               //remove number 9 from starting of array
// console.log(myArr);

// console.log(myArr.includes(9)); //to check no. is present or not

// const newArr=myArr.join()
// console.log(myArr);
// console.log(typeof newArr);   //coz of join its type is string  

//slice,splice

// console.log("s " , myArr);

const myN1=myArr.slice(1,3)
// console.log(myN1);
const myN2=myArr.splice(1,3)
// console.log("A " , myArr);

//++++++++++++++++++++++++array 2+++++++++++++++++++++++++++
const marvel=["spiderman","thor","ironman"]
const dc=["shaktiman","nagraj"]

// marvel.push(dc)
// console.log(marvel);

// marvel.concat(dc)
// console.log(marvel);

console.log(Array.isArray("SANIKA"))
console.log(Array.from("SANIKA"))  //gives seperate array

let score1=100
let score2=300
let score3=200

console.log(Array.of(score1,score2,score3));  //to convert into array
