// const obj={
//     first_name:"jyoti",
//     last_name:"jain",
//     age:21,
//     city:"ajmer",
//     education:"undergraduate",
//     greet:function()
//     {
//          console.log(`hey welcome ${this.first_name} ${this.last_name}`)
//     },
//     print_info:function()
//     {
//           console.log(this)
//     }
// }
// obj.greet()
// obj.print_info()
// console.log( this) //will return empty object
// obj.city="bassi";
// obj.print_info()

function sum(num1,num2)
{
    let multiplier=2;
    console.log(multiplier*num1+multiplier*num2)
    // console.log(this)
}
sum(2,3) //it will NaN  
//****this keyword is useful with objects not functions */

// let func1=function(num1,num2)
// {
//     return num1+num2
// }
// console.log(func1(90,90))

// let func2=(num1,num2)=>{return num1+num2} //if we use {} with => then we have to write return statement if it is 
// //returning something  *****this is arrow function****
// console.log(func2(57,57))

// let func3=(num1,num2)=>(num1+num2) //generally used for one line arrow function here we dont need write return statement
// //explicitly like the above example.
// console.log(34,34)


// /*
// in arrow function:
// {}->explicitly write return statement
// ()->no need to write return statement explicitly

// */

let func=(num1,num2)=>({username:"kallu kaliya"});
console.log(func(2,4));

