function setusername(username)
{
    this.username=username;
    console.log("setusername called")
}

function user(username,password,email)
{
    setusername(username);
    this.password=password;
    this.email=email;

}
let user1=new user("jyotijain",4534,"jyoijain@gmail.com")
console.log(user1);