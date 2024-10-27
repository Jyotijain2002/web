function setusername(username)
{
    this.username=username;
    //console.log("setusername called")
}

function user(username,password,email)
{
   // setusername(username);
   setusername.call(this,username)
    this.password=password;
    this.email=email;

}
let user1=new user("jyotijain",4534,"jyoijain@gmail.com")
//console.log(user1);

//here we can see we are calling function inside a function and that function is setting here user name but on printing user1 it is not showing username because username is not set by the functon setusername because here in call stack the setusername is on top so it is called then popped out from the call stack so we cannot hold on the values as setuserame execution context is removed from the call stack that's the setusername is called so in console we saw printing setusername called but it is not setting username 


// to solve this problem we will be using <-----  call  ----->
//syntax ------>>>>       function_name.call(this,<parameters>)   //yaha par humne this diya he vo de raha he context of the function who is calling that function
//let undersatnd it
// bacuse hume pata he ki jo setusername function he uska context from call stack will be popped out to humne jo function isse call kar raha he uska current context de diya he ...  sqamjh gaye
//call kahta he ki bhai me to is duniya se ja raha hu but mere saaman aap rakh lo



//an amazing example 
function setpassword(password)
{
    this.password=password;
    console.log("setpassword called")
}
function setage(age,password)
{
    setpassword.call(this,password);
    this.age=age;
    console.log("setage called")
}
function setdetails(name,age,password)
{
    setage.call(this,age,password);
    this.name=name; 
    console.log("setdetails called");
}
let client=new setdetails("jyoti jain",21,"Jj2002");
console.log(client)