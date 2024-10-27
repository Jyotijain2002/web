class sum
{
    constructor(num1,num2)
    {
        this.num1=num1;
        this.num2=num2;
    }
    add_nums()
    {
        return this.num1+this.num2;
    }
    static call_me()
    {
        console.log("calculator class is called");
    }
}
class multiply extends sum{
    constructor(num1,num2)
    {
        super(num1,num2);
    }
    multiply_me()
    {     //call_me(); //static methods can not be called in non static methods
       //console.log(this.add_nums());
        return this.num1*this.num2;
    }
}


let c1=new sum(3,4);
//console.log(c1.add_nums()); // o/p =>7
//console.log(c1.call_me()); //will throw error as static methods can not be called via object;
//console.log(sum.call_me()); //static methods can be call via class name only so o/p is as expected
let c2=new multiply(3,4);
c2.multiply_me();
c2.add_nums();
//c2.call_me(); will give error
multiply.call_me();
//static methods are inheritable but cannot be called by object , can only be called via class name and these methods also can not be inside the non static methods 
