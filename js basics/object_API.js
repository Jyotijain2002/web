//object destructuring

let course={
    course_name:"js tutorial",
    course_price:"free",
    course_instructor:"hitesh choudhary",
    course_owner:"jyoti jain"

}
let {course_owner}=course //here now we call the course_owner of course object by course_owner 
console.log(course_owner);
console.log(course.course_owner); 



let {course_instructor:teacher}=course //with the help of {} brackets we can destucture the object here the
// here we give the short name to course_instructor as teacher 
//and now if we want access the course instructor then we can use
// teacher at the place of <----course.course_instructor---->
console.log(teacher);

//api

// {
//     "first_name":"jyoti",
//     "last_name":"jain",
//     "age":21
// }  trated like json

