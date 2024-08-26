let nums=[1,2,3,4,5,6,7,8,9]
// let newNo=nums.map((val) => {return val+10})
// console.log(newNo);

let newNo=nums . map((val) => val*10+1) .filter((val) => val >=40)
console.log(newNo); //its called chaining.we use mult maps & filter into single function