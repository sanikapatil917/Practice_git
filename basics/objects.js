//object literal
// const mySym=Symbol("key1")
// const JsUser={
//     name:"Sanika",
//     fullname:"Sanika Patil",
//     [mySym]:"myKey1",
//     age:21,
//     location:"kolhapur",
//     isLoggedIn:false,
//     email:"sanikapatil@google.com"
// }
// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["fullname"]);
// console.log(typeof JsUser.mySym);

// JsUser.email="sanika@chatgpt.com"
// Object.freeze(JsUser)
// JsUser.email="sanika@microsoft.com"
// console.log(JsUser);

//****************************2nd part********************************
   //const user=new Object()
const user={}             //makes the empty object
 user.id=(123 )
 user.name="sammy"
 user,isLoggedIn=false
console.log(user);

const course={
    coursenm:"js in hindi",
    price:"999",
    courseInstructor:"sanika"
}

//course.courseInstructor
const{courseInstructor:instructor}=course
console.log(instructor);


//+===========API+++++++++++
// {
//     "name":"sanu",
//     "coursename":"js",
//     "price":"free"
// }
[
   {},
   {},
   {} 
]
