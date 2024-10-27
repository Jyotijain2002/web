//map
let mpp=new Map();

mpp.set(1,"jyoti")
mpp.set(2,"bhavya")
mpp.set(3,"divya")
mpp.set(4,"kavya")
mpp.set(1,"jyoti jain")
// console.log(mpp)
// console.log(mpp.keys());
// console.log(mpp.values())
// console.log(mpp.get(4))
// console.log(mpp.has(1))
// console.log(mpp.has(23))
// console.log(mpp.size)
// console.log(typeof mpp.entries)

// for (const [key,value] of mpp) {
//     console.log(key,':',value);
// }
// console.log(typeof mpp)

const myobj={
    1:"india",
    2:"usa",
    3:'china',
    4:"south korea"
}
// for (const {key,value} of myobj) {
//     console.log(key,':',value)            it will give error that myobj is not iterable
// }

//so how to iterate over objects
//with the help of forin loop

for (const key in myobj) {
    //console.log(`${key} : ${myobj[key]}`) //for key-value pairs
}
//for only keys
for (const key in myobj) {
//   console.log(key);
}
//for values
for (const key in myobj) {
//    console.log(myobj[key])
}

//forin loop on array

let arr=[1,2,3,4,5,6]
for (const it in arr) {
    //console.log(arr[it])    forin loop works on array where key is index and array's element is value
}

// for (const key in mpp) {
//     console.log(key)         forin loop doesn't work on map
// }


let nums=["cpp","java","python","js","ruby"]
//iteration through foreach loop
//1)
nums.forEach(function(element)
{
    //console.log(element)
})
//2) 
nums.forEach((element)=>{
//console.log(element)
})

//iteration on array of objects using for each loop

let myarr=[
    {
        p_nname:"c++",
        file_extension:"cpp"
    },
    {
          p_nname:"java",
        file_extension:"java"
    },
    {
          p_nname:"python",
        file_extension:"py"
    },
    {
          p_nname:"javascript",
        file_extension:"js",
        popularity:"very much"
    }
]

myarr.forEach((item)=>{
    //console.log(`${item.p_nname} file extension is ${item.file_extension} and its popularity now a days is ${item.popularity? item.popularity:"not that much"}`)

})


//map method of Array

let mynums=[1,2,3,4,5,6,7,8,9,10]
const newnums=mynums.map((num)=>num*10+1)
console.log(newnums)


let nums1=[1,2,3,4,5,6,7,8,9,10]
nums1.forEach((element)=>
{
    if(element%2==0)console.log(element)
})