const user={
    username:"Sanika",
    price:999,
    welcome:function(){
        console.log(`${this.username},welcome to website`);
        console.log(this);
        
    }
}
// user.welcome()
// user.username="Sanu"
// user.welcome()
// console.log(this);

// function chai(){
//     console.log(this);
    
// }
// chai()

const chai =() =>{
    let username="sanu"
    console.log(this.username);  
    }
chai()

