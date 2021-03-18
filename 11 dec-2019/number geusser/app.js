/*
GAME FUNCTION:
- Player must guess a number between a min and max
- Player gets a certain amount of guesses
- Notify player of guesses remaining
- Notify the player of the correct answer if they loose
- Let player choose to play again
*/

//game value 
let min = 1,
    max = 10,
    winningNum = getRandomNum(min,max),
    guessesLeft = 3;

//UI Elements 

const gameWrapper = document.querySelector('#game'),
      minNumSpan = document.querySelector('.min-num'),
      maxNumSpan = document.querySelector('.max-num'),
      guessSubmit = document.querySelector('#guess-btn'),
      guessInput = document.querySelector('#guess-input'),
      messageP = document.querySelector('.message');

//Assign UI min and max 
minNumSpan.textContent = min;
maxNumSpan.textContent = max; 

//play again event listener  //play-again is the class added // The reload() method does the same as the reload button in your browser.//the reason why mousedown and not click is used is if the click is used it will fired off straight away but if on the next go mouse down is used fired off when the results in place then it will fire off 
gameWrapper.addEventListener('mousedown' , function(e){
      if(e.target.className === 'play-again') {
          window.location.reload();
      }
});

//Listen for guess
guessSubmit.addEventListener('click', function() {
    //guessInput.value //this is a string 
    let guessVal = parseInt(guessInput.value);
    
    //validate
    if(isNaN(guessVal) || guessVal < min || guessVal > max) {
       setMessage(`Please enter a number between ${min} and ${max}`, 'red');

    }

    
    if(guessVal === winningNum) {
    //if won //disable input //selectObject.disabled = true|false // guessInput.disabled = true; //change border color //guessInput.style.borderColor = 'green'; //set message //setMessage(`${winningNum} is correct! YOU WIN!`, 'green');
        gameOver(true, `${winningNum} is correct! YOU WIN!`)

    } else {
        //wrong number 
        //guessesLeft -= 1;
        //same as 
        guessesLeft = guessesLeft - 1;

            if(guessesLeft === 0){ //if else with a if else 
            //game over - when all 3 guessesLeft have run out //old way // guessInput.disabled = true; //disable input // guessInput.style.borderColor = 'red'; //change border color // setMessage(`Game Over, you lost. The correct number was ${winningNum}`, 'red'); //tell user it's the wrong number 
            gameOver(false, `Game Over, you lost. The correct number was ${winningNum}`)

        
            } else {
                //game continues - 1 wrong each time, pretty much as above
                
                //change border color 
                guessInput.style.borderColor = 'red';

                //clear the input after a geuss
                guessInput.value = "";

                //tell user its the wrong number still using the function used below 
                setMessage(`${guessVal} is not correct, ${guessesLeft} guest left` , 'red');
            }
    }
    
});

//get winning number 
function getRandomNum(min,max){
    //console.log((max-min+1)+min);//return puts it back to winning number 
    return Math.floor(Math.random()*(max-min+1)+min);
}

//game over win/lose situation, use this instead of repeating yourself (DRY)
function gameOver(won, msg) {
     let color;
     won === true ? color = 'green' : color = 'red';
     guessInput.disabled = true;  //disable input left the same
     guessInput.style.borderColor = color; //border color depends on terniary operator condition 
     messageP.style.color = color;
     setMessage(msg);
     guessSubmit.value = 'Play Again';
     guessSubmit.className += 'play-again';
}

//set error/won messages 
//msg parameters arguement is in the if statement above 
//the parameters is like a middle man 
//p tag value is also set here via textContent 
function setMessage(msg, color) {
    messageP.style.color = color;
    messageP.textContent = msg;
}

