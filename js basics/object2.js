let sym=Symbol();
let facebook_user={
    name:"jyoti jain",
    password:"jyoti6789",
    user_name:"kallu kaliya",
    [sym]:"diamond",
    location_info:
    {
     city:"ajmer",
     district:"ajmer",
     state:"rajasthan",
     pin_code:305001,
     country:"india"
    }
}
//console.log(facebook_user);
// console.log(facebook_user.location_info?.city); //it will check whether the locaation_info is present in 
//facebook_user or not


//merging of two objects.
let o1={1:"a",2:"b",3:"c"}
let o2={4:"d",5:"e",6:"f"}
////let o3=Object.assign({},o1,o2)
//console.log(o3) //it will merge o1 & o2 in {} , here {}=target and o1,o2 are sources the merged object will be in {}
//o1 and o2 will not change but we can change them we cahnge the target
//eg
// let o3=Object.assign(o1,o2);
// console.log(o1); //o1 will have merged item of o1 and o2
// console.log(o2);
// console.log(o3); // will have o1 & o2 merged
let o3={o1,o2} //it will create object of object
// console.log(o3);


//another way to merge objects
let o4={...o1,...o2,...facebook_user,...o3}
//console.log(o4);

// console.log(Object.keys(facebook_user)); //it will give the array of keys [,,,]
// console.log(Object.values(facebook_user)); // it will also give the array of values [,,,]
// console.log(Object.entries(facebook_user)); // it will give the array of array of key-value pairs [[],[],[]]

//if we want to check whether a key is present in the object or not then do this
console.log(facebook_user.hasOwnProperty("user_name")) //for keys
console.log(facebook_user.hasOwnProperty("location_info")) //for object
console.log(facebook_user.hasOwnProperty(sym)) //for symbol
console.log(facebook_user)









