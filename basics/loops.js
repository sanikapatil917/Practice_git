// for of loops works for array
const arr=[1,2,3,4,5]
for (const num of arr) {
//    console.log(num);
    }

    const greetings="hello"
    for (const greet of greetings) {
        console.log(`each char is ${greet}`); 
        }

        //maps
        const map=new Map()
        map.set('IN','India')
        map.set('fs','france')
        // console.log(map);

        // for (const key of map) {
        //    console.log(key);
            
        // }

        // or
        for (const [key,value] of map) {
            console.log(key,':',value);
        }
 //for in loop work for objs only
        const myObj={
            'Game1':'nfs',
            'Game2':'spiderman',
        }
        for (const value in myObj) {
            console.log(value);
            
        }
        