let playerWins = 0, computerWins = 0;

// computer chooses a random choice between Rock, Paper, or Scissors
function computerPlay() {
  const choices = ['Rock', 'Paper', 'Scissors'];
  let choice = Math.floor(Math.random() * 3);
  return choices[choice];
}

// play one round of rock paper scissors
function playRound(playerSelection) {
  let computerSelection = computerPlay();

  const result = document.querySelector('#result');
  const playerScore = document.querySelector('#player-score');
  const computerScore = document.querySelector('#computer-score');

  if(playerSelection === computerSelection) {
    result.textContent = `Draw! You and the computer both chose ${playerSelection}`;
  }
  else if(playerSelection === 'Rock' && computerSelection === 'Paper') {
    result.textContent = 'You Lose! Paper beats Rock';
    computerScore.textContent = `Computer: ${++computerWins}`;
  }
  else if(playerSelection === 'Rock' && computerSelection === 'Scissors') {
    result.textContent = 'You Win! Rock beats Scissors';
    playerScore.textContent = `Player: ${++playerWins}`;
  }
  else if(playerSelection === 'Scissors' && computerSelection === 'Rock') {
    result.textContent = 'You Lose! Rock beats Scissors';
    computerScore.textContent = `Computer: ${++computerWins}`;
  }
  else if(playerSelection === 'Scissors' && computerSelection === 'Paper') {
    result.textContent = 'You Win! Scissors beats Paper';
    playerScore.textContent = `Player: ${++playerWins}`;
  }
  else if(playerSelection === 'Paper' && computerSelection === 'Scissors') {
    result.textContent = 'You Lose! Scissors beat Paper';
    computerScore.textContent = `Computer: ${++computerWins}`;
  }
  else if(playerSelection === 'Paper' && computerSelection === 'Rock') {
    result.textContent = 'You Win! Paper beats Rock';
    playerScore.textContent = `Player: ${++playerWins}`;
  }
}

const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
  button.addEventListener('click', () => {
    if(playerWins < 5 && computerWins < 5) {
      playRound(button.id);

      if(playerWins == 5 || computerWins == 5) {
        const winner = document.querySelector('#winner');
        winner.textContent = `${(playerWins == 5) ? 'You won' : 'You lost'} the game!`;
      }
    }
  });
});