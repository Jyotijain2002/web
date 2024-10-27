let user={
    user_name:"jyoti jain",
    user_password:"2343",
    logged_in:true,
    user_details:function()
    {
        console.log("userdetails from database are");
       // console.log(`username: ${user_name}`) // here we will get user_name is undefined 
        //because here we are not clear about the context 
        // so for the current context we will use this keyword

        console.log(`username: ${this.user_name}`);
    }
}

user.user_details();