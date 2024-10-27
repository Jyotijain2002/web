// const user={
//     username:"jyoti jain",
//     logged_in:true,
//     user_id:"jyoti_jain",
//     log_count:15,
//     userdetails:function()
//     {
//       console.table([this.username,this.logged_in,this.user_id,this.log_count]);
//     }
// }
function User(username,logged_in,user_id,log_count)
{
    this.username=username;
    this.logged_in=logged_in;
    this.user_id=user_id;
    this.log_count=log_count;
    this.greeting=function()
    {
        console.log(`hello ${username}`);
    }
}
user1= new User("jyoti jain",true,"jyoti_jain",13);
console.log(user1);
