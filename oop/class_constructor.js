class user{
    constructor(username,email,password)
    {
        this.username=username;
        this.email=email;
        this.password=password;
    }
    print_username()
    {
        console.log(`username: ${this.username}`);
    }
    
    print_email()
    {
        console.log(`user-email: ${this.email}`);
    }

    encript_password()
    {
        return `${this.password}ffddtret679798778`;
    }
}
let user1=new user("jyoti jain","jyi@any.com",557576);
//user1.print_username();
//user1.print_email();
//console.log("password :"+user1.encript_password());

//behind the scene

//creation of constructor function
function User(name,email,password)
{
    this.name=name;
    this.email=email;
    this.password=password;
}
User.prototype.print_mail=function()
{
    console.log(`email: ${this.email}`);
}
User.prototype.print_name=function()
{
    console.log(`name: ${this.name}`);
}
User.prototype.encript_pwd=function()
{
    return `${this.password}wet8723687`;
}
let newuser=new User("jyoti jain","jj5465@mail.com",578009806534)
console.log(newuser);