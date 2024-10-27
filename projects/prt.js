let button=document.querySelector('#calculate');
let total=document.querySelector('#total');
button.addEventListener('click', function(e)
{
    e.preventDefault();
    let amt=parseFloat(document.querySelector('#amt').value);
    let rate=parseFloat(document.querySelector('#rate').value);
    let time=parseFloat(document.querySelector('#time').value);
    total.value=amt+parseFloat((amt*rate*time/100).toFixed(2));

})

