class user{
    constructor(username)
    {
        this.username=username;
    }
    add_me()
    {
        console.log(`username: ${this.username}`);
    }
}
class teacher extends user{
    constructor(username,email,password)
    {
        super(username) // it will initialize the constructor of parent class that is user here with the help of super keyword;
        this.email=email;
        this.password=password;
    }
    add_course()
    {
        console.log(`new course added by ${this.username} `);
    }
}
let user1=new teacher("jyoti jain","jj544@huwei",65809);
user1.add_me();
user1.add_course();

