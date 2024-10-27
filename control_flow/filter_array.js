let nums=[1,2,3,4,5,6,7,8,9,10]
//forEach loop doesn't return anything
//example
const newnum=nums.forEach((num)=>{
    return num;             //nothing wil be printed in the console
})
//console.log(newnum) //will return undefined

//what if we want top return something from array based on some conditions so for taht we will use filter

let newarr=nums.filter((element)=>{
       return element>4;    //explicit return due to {}
})
// console.log(newarr) //output= [5,6,7,8,9,10]

let newarr1=nums.filter((element)=>element>4) //implicit return 
//console.log(newarr1) //op=[5,6,7,8,9,10]


const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

let required_books=books.filter((bk)=>bk.genre=="History" && bk.publish<1999);
let required_books2=books.filter((bk)=>bk.genre=="Non-Fiction" && bk.publish<=2000);
required_books2.forEach((item)=>{
    console.log(item.edition);
})