// 'use strict';

let randomNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let highestScore = 0;

const checkValue = () => {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    alert('No number was entered!');
  } else if (score > 1) {
    if (guess === randomNumber) {
      showMessage(`Congratulations!`);
      document.querySelector('body').style.background = `#60b347`;
      document.querySelector('.number').style.width = `40rem`;
      document.querySelector('.number').textContent = String(randomNumber);
      if (highestScore < score) {
        highestScore = score;
        document.querySelector('.highscore').textContent = highestScore;
      }
    } else if (guess !== randomNumber) {
      showMessage(guess > randomNumber ? `The number is less than ${guess}` : `The number is greater than ${guess}`);
      score--;
      document.querySelector('.score').textContent = score;
    }
  } else {
    showMessage(`You have lost. End of the game`);
    document.querySelector('.score').textContent = 0;
  }
};

let showMessage = (msg) => document.querySelector('.message').textContent = msg;

const newGame = () => {
  showMessage(`Start guessing...`);
  document.querySelector('body').style.background = `#222`;
  document.querySelector('.score').textContent = String(20);
  document.querySelector('.guess').value = '';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.number').style.width = `15rem`;
  randomNumber = Math.trunc(Math.random() * 20 + 1);
  score = 20;
  console.log(randomNumber);
};

document.querySelector('.check').addEventListener('click', checkValue);
document.querySelector('.again').addEventListener('click', newGame);

