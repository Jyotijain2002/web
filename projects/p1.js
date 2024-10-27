const list = document.querySelectorAll('.button');
list.forEach((button) => {
    //yaha hum har button par event listner lagayege
    button.addEventListener('click', function (e) {
       console.log(e.target.id)
       //e.target targets the object on which we have clicked
      let button_id=e.target.id;
      switch(button_id)
      {
            case "grey":
            document.body.style.backgroundColor = e.target.id;
            break;
            case "white":
            document.body.style.backgroundColor = e.target.id;
            break;
            case "greenyellow":
            document.body.style.backgroundColor = e.target.id;
            break;
            case "yellow":
            document.body.style.backgroundColor = e.target.id;
            break;
      }
    })
})