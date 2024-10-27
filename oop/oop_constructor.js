//constructor function gives us a structure/skeleton to create new objects

function user(username,userid,logged_in,log_count)
{
    this.username=username;
    this.userid=userid;
    this.logged_in=logged_in;
    this.log_count=log_count;
    return this       // agar ye likhte he and new keyword use nahi karte he then userone ki value will be overwritten by the usertwo
}

const userone=  new user("jyoti jain",1001,true,16);  //new keyword gives us a new instance of the object in which we modify the data
//console.log(userone);
const usertwo=  new user("jyoti jain",1002,false,20);  
//console.log(usertwo);


//instanceof operator
  let user1=new user("jj",202,true,8);
  let user2=new user("jjain",2002,true,9);
  console.log(user1 instanceof user);
  console.log(user2 instanceof user);
  //console.log(user1 instanceof user2);  // it will give error that ---> Right-hand side of 'instanceof' is not callable

  function client(client_name,client_id,client_loan_amt)
  {
    this.client_name=client_name;
    this.client_id=client_id;
    this.client_loan_amt=client_loan_amt;
   
  }
  console.log(user1 instanceof client)//false
  console.log(user instanceof client)//false

  
