let randomNo = parseInt(Math.random()*100+1);
const userInp = document.querySelector('#myno');
const submit = document.querySelector('#submit');
const guessSlot = document.querySelector('#Bguess');
const remain = document.querySelector('#lastguess');
const lowOrHigh = document.querySelector('.lowOrHi');
const startOver = document.querySelector('#resultparas');

const p = document.createElement('p');
let prevGuess = [];
let numGuess = 1;
let playGame = true;

if (playGame) {
    submit.addEventListener('click', function (e) {
      e.preventDefault();
      const guess = parseInt(userInp.value);
      console.log(guess);
      validateGuess(guess);
    });
  }

function validateGuess(guess) {
    if (isNaN(guess)) {
      alert('Only number is expected');
    } else if (guess < 1) {
      alert('PLease enter a number more than 1');
    } else if (guess > 100) {
      alert('PLease enter a  number less than 100');
    } else {
      prevGuess.push(guess);
      if (numGuess >10) {
        displayGuess(guess);
        displayMessage(`Game Over. Random number was ${randomNo}`);
        endGame();
      } else {
        displayGuess(guess);
        checkGuess(guess);
      }
    }
  }

function checkGuess(guess) {
    if (guess === randomNo) {
      displayMessage(`You guessed it right`);
      endGame();
    } else if (guess < randomNo) {
      displayMessage(`Number is TOOO low`);
    } else if (guess > randomNo) {
      displayMessage(`Number is TOOO High`);
    }
  }

function displayGuess(guess) {
    userInp.value = '';
    guessSlot.innerHTML += `${guess}, `;
    numGuess++;
    remain.innerHTML = `${11 - numGuess} `;
  }
function displayMessage(message) {
    lowOrHigh.innerHTML = `<h4>${message}</h4>`;
  }
function endGame() {
    userInp.value = '';
    userInp.setAttribute('disabled', '');
    p.classList.add('button');
    p.innerHTML = ` <input type="submit" class="newGame" id="newGame" value="Restart">`;
    startOver.appendChild(p);
    playGame = false;
    newGame();
  }

  function newGame() {
    let newGameButton = document.querySelector('#newGame');
    newGameButton.addEventListener('click', function (e) {
      randomNo = parseInt(Math.random() * 100 + 1);
      prevGuess = [];
      numGuess = 1;
      guessSlot.innerHTML = '';
      remain.innerHTML = `${11 - numGuess} `;
      userInp.removeAttribute('disabled');
      startOver.removeChild(p);
  
      playGame = true;
    });
  }