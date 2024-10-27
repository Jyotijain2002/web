let random_num=parseInt(Math.random()*100+1);
let input=document.querySelector('#guessField');
let sub_button=document.querySelector('#subt');
let previous_guesses=document.querySelector('.guesses');
let rem_guesses=document.querySelector('.lastResult');
let guess_message=document.querySelector('.lowOrHi');
let start_over=document.querySelector('.resultParas');
let play=true;
let prev_guess=[];
let num_cnt=1;
let butt=document.createElement('button');
if(play)
{
   sub_button.addEventListener('click',function(e)
{
    e.preventDefault();
    const guess=parseInt(input.value);
   validate_guess(guess);
})
}
function validate_guess(guess)
{
    if(isNaN(guess))
    {
        alert('please enter a valid guess');
    }
    else if(guess<1)
    {
        alert('please enter a number greater than 1');
    }
    else if(guess>100)
    {
        alert('please enter a number less than 100');
    }
    else 
    {
        prev_guess.push(guess);
        if(num_cnt==11)
        {
            display(guess);
            displayMessage(`game is over. random number was ${random_num}`);
            end_game();
        }
        else 
        {
            display(guess);
            check_guess(guess);
        }
    }
}
function check_guess(guess)
{
    if(guess===random_num)
    {
        displayMessage("you won the game");
        end_game();
    }
    else if(guess<random_num)
    {
        displayMessage("your guess is too low");
    }
    else 
    {
        displayMessage("your guess is too high");
    }
}

function display(guess)
{
    input.value='';
    previous_guesses.innerHTML+=`${guess} `;
    num_cnt++;
    rem_guesses.innerHTML=`${11-num_cnt}`;
}

function displayMessage(message)
{
    guess_message.innerHTML=`<h2>${message}</h2>`
}

function end_game()
{
    input.value='';
    input.setAttribute('disabled','');
    butt.classList.add('button');
    butt.innerHTML=`<p id="new_game">start a new game</p>`;
    start_over.appendChild(butt);
    play=false;
    new_game();
}
function new_game()
{
    new_game_button=document.querySelector('#new_game');
    new_game_button.addEventListener('click',function(e)
{
       random_num=parseInt(Math.random()*100+1);
       prev_guess=[];
       num_cnt=1;
       previous_guesses.innerHTML='';
       rem_guesses.innerHTML=`${11-num_cnt}`;
       input.removeAttribute('disabled');
       start_over.removeChild('butt');
       play=true;
})
}


