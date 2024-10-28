//can change the value of PI to 4   ans---> NO 
//because, you can’t overwrite built-in properties like Math.PI because they are non-configurable and non-writable.
//let's see how
const descriptor=Object.getOwnPropertyDescriptor(Math,'PI'); //(module,property)
//console.log(descriptor); // it will whole description of PI 
//here what we get 
/*
{
  value: 3.141592653589793,
 <--- writable: false,--->
  enumerable: false,
  configurable: false
} */
//here we can see that writable of PI is false if we can cahnge the value of P to 4 ;
//so to change any single property of PI or any property we will use 
// Object.defineProperty(<module>,<property>,<{object of list of properties with their changed values }>)




// Object.defineProperty(Math,'PI',{         //if write this code and try to change description of PI then it would give error 
//     //    Error:Cannot redefine property: PI
    
//     enumerable:true,
//     value:4
// })


const myboj={
    username:"jyoti jain",
    user_id:45788
}
//console.log(Object.getOwnPropertyDescriptor(myboj,'username'));

//output
// {
//     value: 'jyoti jain',
//     writable: true,
//     enumerable: true,
//     configurable: true
//   }
// now can we redefine the description of myboj ->> yes beacuse it is not builtin 
Object.defineProperty(myboj,'username',{
    writable:false,
   
})
//console.log(Object.getOwnPropertyDescriptor(myboj,'username'));
//output:
// {
//     value: 'jyoti jain',
//     writable: false,
//     enumerable: false,
//     configurable: true
//   }
//now as we set the writable of username to false so lets see whether we can rewrite it or not
myboj.username="ronak jain";  //it will not change the username;
console.log(myboj);
myboj.user_id=778675645; //it will change the user_id as its writable id true; 
console.log(myboj);