console.log(false=={})
console.log([]=={})
console.log(""==false)
console.log(null==false)
console.log(null==undefined)

//nullish coalescing operator
let val1;
// val1=3??5
// val1=null??34
// val1=23??undefined
val1=null??undefined
console.log(val1)

//ternary operator

let age=78
age>=18?console.log("eligible to vote"):console.log("not eligible to vote")