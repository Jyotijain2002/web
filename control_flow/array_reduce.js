let nums=[1,2,3,4,5,6,7,8,9,10]
let total=nums.reduce(function(acc,currval)
{
    return acc+currval;
},0)
//console.log(total)

//using arrow function

let t=nums.reduce((acc,currval)=>(acc+currval),0);
//console.log(t); 

let tot=nums.reduce((acc,currval)=>{
//console.log(`acc:${acc},currval:${currval}`)
return acc+currval
},0)
//console.log(tot)



const shopping_cart=[
    {
        p_name:"js course",
        price:2999
    },
    {
        p_name:"cpp course",
        price:999
    },
    {
        p_name:"java course",
        price:999
    },
    {
        p_name:"python course",
        price:999
    }
]


let tot_price=shopping_cart.reduce((acc,curr_item)=>
{
    return acc+(curr_item.price?curr_item.price:0);
},0)
console.log(tot_price)
