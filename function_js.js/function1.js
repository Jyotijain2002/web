// function greet(name)
// {
//     console.log(`hello, welcome back ${name}`);
// }
// let name="jyoti jain"
// greet(name)
// greet("jyoti jain");

// let welcome=function(name)
// {
//     console.log(`hello ${name}`);
    
// }
// welcome(name)

// let str="kallu kaliya"
// let arr=[];
// function print(arr,str){
    
// for (let i = 0; i < str.length; i++) {
//      arr.push(str[i]); 
// }
// }
// print(arr,str);
// for (let i = 0; i < arr.length; i++) {
//    console.log(arr[i]);
//    }
 function sum(a,b,c)
 {
    return a+b+c
 }
 console.log(sum(9,9,9))


 function is_logged_in(str)
 {
    return `${str} just logged in`;
 }
 console.log(is_logged_in("jyoti jain")); //when we gave an umempty string
 console.log(is_logged_in(""));//when we gave an empty string
 console.log(is_logged_in()); // when we gave no argument then we will get "undefined just logged in"


 //default argument
 let str;
 function name(str="kallu kaliya")
 {
    console.log(`is your name ${str}`);
 }
 name(str);
