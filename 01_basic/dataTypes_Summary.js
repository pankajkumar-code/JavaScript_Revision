//Premetive (Ye Call By Value Hote Hai)

//7 Types => String , Number , Boolean , null , undefined , Symbol , Bigint


// Konw About Symbol data Type

// const id=Symbol("123");
// const anotherId= Symbol("123");
// console.log(id); //123
// console.log(anotherId); // 123
// console.log(id==anotherId);  //false 

// bigint

//const bigNumber = 1223345567887n;
//console.log(bigNumber);
//console.log(typeof bigNumber);







// Reference(Non-Premeitive)

// Types => Array , Object , Function

// Arry

//let superHero= [shaktiman , Doga , BAtMan,]

// Object
//let mtObject={
   // name:"Pankaj",
   // Age: 22,


//Function

//const myFunction= function(){
   // console.log("Hello World");
    
//}



// Is JavaScript is Statically Typped Language And Dynamically Typed Language?


/*

What is Static Typing?

In a statically typed language, you must declare the type of a variable at compile time, and it cannot change later.

Example (C / Java):
int x = 10;
x = "Hello";   // ❌ Error: type mismatch


✔ Type is fixed
✔ Errors caught before running the program

🔹 What is Dynamic Typing?

In a dynamically typed language, the type is decided at runtime, and a variable can hold any type of value.

Example (JavaScript):
let x = 10;       // number
x = "Hello";     // string
x = true;        // boolean

*/



// for Interview Purose

/*

typeof        Operator Output
Value	      typeof
10	          "number"
"JS"	      "string"
true	      "boolean"
undefined	   "undefined"
null	      "object" ⚠️ (JS bug)
{}	          "object"
[]	           "object"
function(){}	"function"


*/


                                            /*memory*/

/*

1) stack => (Premptive Data type ) - Variable ka copy milta hi 
2) Heap => (Non Premptive Data Type ) - Variable ka reference Milta hi
  

*/

let myYoutubeId = "Pankaj";
let anotherId=myYoutubeId;
anotherId="Prem";
console.log(myYoutubeId);
console.log(anotherId);

let userOne= {
   userId:"Pankaj@123",
   upi:"pankaj@ybl",

}

let userTwo = userOne;
userTwo.userId="Prem@123";
console.log(userOne.userId);
console.log(userTwo.userId);




