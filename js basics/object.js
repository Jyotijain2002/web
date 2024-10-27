let name= Symbol()
let password=Symbol()
let obj1={
    [name]:"jyoti", // [] usd for symbols 
    [password]:123,
    full_name:"jyoti jain",
     "my city":"ajmer"}
     
    //Object.freeze(obj1); // it prevents anyone to update the value of object on which it is applied

     //updation in key value
     obj1[password]=1345657;
     obj1.full_name="kallu kaliya";
     obj1["my city"]="banglore";
     obj1[name]="kallu";
     
    //  console.log(obj1.full_name)
    //  console.log(obj1[name])
    //  console.log(obj1[password])
     
    //  console.log(obj1["my city"]);
     
    //  console.log(typeof obj1.full_name)
    //  console.log(typeof obj1[name])
    //  console.log(typeof obj1[password])
     
    obj1.greeting=function()
    {
        console.log(`hello and welcome back ${obj1.full_name} and your password is ${obj1[password]}`)
    }

    // console.log(obj1.greeting())
    // console.log(obj1.greeting)
    delete(obj1.full_name);
    console.log(obj1.full_name);

    