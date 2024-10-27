//rest and spread operator

function sum(...nums)
{
  return nums;
}
// let nums=sum(1,2,3,4,5,6,7,8,9,10); // will return the array of values
// console.log(nums.length)
// function rest_operator(val1,val2,val3,...nums)
// {
//     console.log([val1],[val2],[val3],[nums]);
// }
// rest_operator(100,200,300,400,500);
// rest_operator(100,200,300);
// rest_operator(100,200);
//output
// [ 100 ] [ 200 ] [ 300 ] [ [ 400, 500 ] ]
// [ 100 ] [ 200 ] [ 300 ] [ [] ]
// [ 100 ] [ 200 ] [ undefined ] [ [] ]



//object as parameter
const user={
    username:"jyoti jain",
    age:22,
    subject:"cse",
    course:"btech"
}



function object_as_parameter(anyobject)
{
 console.log(anyobject)
}



//direct object passing as argument without declaring it beforehand
object_as_parameter({
    age:21,course:"btech",name:"jyoti jain"
})


//array passing as argument
function array_passing(nums)
{
    console.log(nums);
}
//let nums=[1,2,3,4,54]
array_passing([1,2,3,4,54])

