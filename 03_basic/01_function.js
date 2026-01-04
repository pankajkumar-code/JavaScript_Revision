 function sayMyName(){
    console.log("P");
    console.log("a");
    console.log("n");
    console.log("k");
    console.log("a");
    console.log("j");
    
 }
 //sayMyName()


//  function addTwoNumbers(number1,number2){
//     console.log(number1+number2);
    
//  }



// addTwoNumbers(2,5)
//  const result = addTwoNumbers(8,3)
//  console.log("result", result);



function addTwoNumbers(number1,number2){
   //  const result=number1+number2
   //  return result
    return number1+number2
 }

 //addTwoNumbers(2,5)
 const result = addTwoNumbers(8,3)
 //console.log("result", result);
 


 /*usernme===undefined  same as !username*/

 function userLoginMessage(username){
   if(username===undefined){
      console.log("Please enter username");
      return
   }
   return `${username} Just Logged in`
 }

 
 //console.log(userLoginMessage("Pankaj"));    //Pankaj Just Logged in
 //console.log(userLoginMessage(""));    // Just Logged in
 //console.log(userLoginMessage());   

 function calculateCartPrice(...num1){     //... ko yahan rest operator bola jata hi
   return num1
 }
 console.log(calculateCartPrice(100,200,333));

 const user ={
   name:"Pankaj",
   price:15,
 }
 
 function handleObject(anyObject){
      console.log(`User name is ${anyObject.name} and Price is ${anyObject.price}`);
      
 }
        //handleObject(user)    
        handleObject({
         name:"Pankaj",
         price:15
        })

        // Ek Array ka nth value return karna hi through function

        const Array=[12,11,10,9,8]
        function returnArray(getAnyArray){
          return getAnyArray[1]
        }
        console.log(returnArray(Array));
        