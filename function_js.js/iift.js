(function status()
{
    console.log("database connected")
})(); // to stop iift context


(()=>{console.log("checking connectivity")})();

(function()
{
    console.log(`sum is ${2+3}`)
})();



(function welcome(name,designation)
{
    console.log(`welcome ${name}, are you excited to work with us for the ${designation} role`)
})("jyoti jain","software engineer");