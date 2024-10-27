let form=document.querySelector('#bmi_form');
form.addEventListener('submit',function(e)
{
 e.preventDefault();
 let h=parseInt(document.querySelector('#height').value);
 let w=parseInt(document.querySelector('#weight').value);
 let r=document.querySelector('#result');

 if(!h || h<=0 || isNaN(h) )
 {
    r.innerHTML="enter valid height";
 }
 if(!w || h<=0 || isNaN(w) )
    {
       r.innerHTML="enter valid weight";
    }
    else{
        const bmi=(w /(h*h/10000)).toFixed(2);
        if(bmi<18.6)
        {
r.innerHTML=`<span>${bmi}<br> under-weight</span>`
        }
        else if(bmi>=18.6 && bmi<=24.9)
        {
r.innerHTML=`<span>${bmi}<br> normal-weight</span>`
        }
        else{
r.innerHTML=`<span>${bmi}<br> over-weight</span>`
        }
    }
 
})