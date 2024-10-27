// function create_user(name,score)
// {
//     this.name=name;
//     this.score=score;
// }
// create_user.prototype.increamentscore=function()  // with the help of this we can add additional methods and properties to an object like hereincreamentscore method
// {
//     this.score++;
// }
// create_user.prototype.print_me=function()  //and here print_me method
// {
//     console.log(`name: ${this.name}   score: ${this.score}`);
// }
// let user1=new create_user("jyoti jain",365);  
// let user2=create_user("hitesh choudhary",720);
// user1.print_me();  //here we calling print_me function but on running it will give us error  because here print_me not bindng the print_me function to the user1    ------   to solve this we will use new keyword  it will give us a new instance of the object 


// console.log(String instanceof Object) //true
// console.log(Array instanceof Object)   //true
// console.log(Function instanceof Object)  //true

// //Object--->parent && string,array,function are child of Object
// //if there we insert any new property in parent then it will pass down to its children lets look at an example;

// let arr=[1,23,45];
// let str="jyoti jain";
// function func1(){}
// Object.prototype.jyoti=function()
// {
//     console.log('I am a method that is present in all childs of object + object')
// }
// arr.jyoti();    //accessible by all these arr,str,func1
// str.jyoti();
// func1.jyoti();


// //now lets see if we add a new property/method in a child then will it will be accessible to Parent or not;

// String.prototype.new_method=function()
// {
//     console.log("i am string new method");
// }
// let user={}
// str.new_method();
// //user.new_method(); //not accessible
// arr.new_method();  //not accessible 
// //so 

// function Circle() {}
// const shape = {};
// const circle = new Circle();


// Set the object prototype.
// DEPRECATED. This is for example purposes only. DO NOT DO THIS in real code.
// shape.__proto__ = circle;


// Get the object prototype
// console.log(shape.__proto__ === Circle); // false
// console.log(shape.__proto__ === circle); //true

//__proto__ has been depricated instead of this now a days we use ----------->  Object.setPrototypeOf()  <----------

function circle(name,company_name){
this.name=name;
this.company_name=company_name
}
function shape(shape_name,owner_name){
    this.shape_name=shape_name;
    this.owner_name=owner_name;
}
let circle1=new circle("round circle","microsoft");
let shape1=new shape("circle","jyoti jain");
Object.setPrototypeOf(shape1,circle1); // first object and second prototype (dono object hote constructor function nahi de sakte he )
//console.log(shape.__proto__==circle)   
// shape1 ka prototype he circle1 jisse wo properties ans methods inherit karta he  
console.log(circle1.name);
console.log(shape1.name)
console.log(shape1.shape_name);
console.log(shape1.owner_name);
console.log(shape1.company_name)




