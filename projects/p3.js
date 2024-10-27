let box2=document.getElementById('box2');
setInterval(function(){
    let date=new Date();
    box2.innerHTML=date.toLocaleTimeString();
},1000)