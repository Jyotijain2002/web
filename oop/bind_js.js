//bind method use

const user={
    name:"jyoti jain",
    greet:function()
    {
        console.log(`your name is ${this.name}`);
    }
}
//user.greet();
const user1={
    name:"jjain"
}
const greet2=user.greet.bind(user1);   // here we bind the greet of user to user1 context.
//greet2(); //when we will call this we will get <----- your name is jjain ----->

