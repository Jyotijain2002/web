// //scope
// let a=200;
// const b=400;
// var c=2367; //var scope ko differentiate nahi kar pata he 
// //so dont use it 
// if(true)
// {
//     let a=23
//     let b=34
//     var c=45477
//     console.log(a,b,c)
// }
// console.log(a,b,c)

// function one(num)
// {
//     let web="jyoti.com";
//     function two(num2)
//     {
//         let web2="jj.com";
//         console.log(web," ",web2)
//     }
//     two(34);
//     //console.log(web2)
//     console.log(web)
// }
// one(45)

//hoisting
//functions can be declared in two ways first with the help of variable another way is without variable.
//without 
find(23456757)
function find(num1)   //if declare this way then we can call the function before the function declaration
{
    console.log(num1)
}


//find2(346) //it will give error
let find2=function(num1) //here the val of function is stored in a variable so we cannot call the function before 
{                       // the declaration of the variable.
console.log(num1)
}
find2(57575) // it will not give the error