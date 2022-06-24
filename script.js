function computerPlay() {
  const choices = ['ROCK', 'PAPER', 'SCISSORS'];
  let choice = Math.floor(Math.random() * 3);
  return choices[choice];
}

function playRound(playerSelection, computerSelection) {
  if(playerSelection === computerSelection) {
    console.log('Draw! You and the computer both chose ' + playerSelection.charAt(0) + playerSelection.slice(1).toLowerCase());
    return -1;
  }
  else if(playerSelection === 'ROCK' && computerSelection === 'PAPER') {
    console.log('You Lose! Paper beats Rock');
    return 0;
  }
  else if(playerSelection === 'ROCK' && computerSelection === 'SCISSORS') {
    console.log('You Win! Rock beats Scissors');
    return 1;
  }
  else if(playerSelection === 'SCISSORS' && computerSelection === 'ROCK') {
    console.log('You Lose! Rock beats Scissors');
    return 0;
  }
  else if(playerSelection === 'SCISSORS' && computerSelection === 'PAPER') {
    console.log('You Win! Scissors beats Paper');
    return 1;
  }
  else if(playerSelection === 'PAPER' && computerSelection === 'SCISSORS') {
    console.log('You Lose! Scissors beat Paper');
    return 0;
  }
  else if(playerSelection === 'PAPER' && computerSelection === 'ROCK') {
    console.log('You Win! Paper beats Rock');
    return 1;
  }
}

function game() {
  let playerWins = 0, computerWins = 0;

  for(let i=0; i<5; ++i) {
    let playerSelection = prompt('Enter a choice: rock, paper, or scissors').toUpperCase();

    if(playerSelection === 'SCISSOR')
      playerSelection = 'SCISSORS';
    console.log(playerSelection);

    while(playerSelection !== 'ROCK' && playerSelection !== 'PAPER' && playerSelection !== 'SCISSORS') {
      playerSelection = prompt('Invalid choice. Enter rock, paper, or scissors').toUpperCase();
      if(playerSelection === 'SCISSOR')
        playerSelction = 'SCISSORS';
    }

    let computerSelection = computerPlay();
    let roundResult = playRound(playerSelection, computerSelection);
    
    if(roundResult === 0)
      ++computerWins;
    else if(roundResult === 1)
      ++playerWins;
  }

  if(playerWins > computerWins)
    console.log('Player Wins');
  else if(computerWins > playerWins)
    console.log('Computer Wins');
  else
    console.log('Draw');
}