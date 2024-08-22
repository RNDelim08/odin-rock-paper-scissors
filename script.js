//  Pseudocode for Rock Paper and Scissors game

//  Create a function for the computer to randomly generate a choice between rock, paper and scissors

function getComputerChoice() {
  const option1 = 'rock';
  const option2 = 'paper';
  const option3 = 'scissors';
  let computerChoice = Math.random() * 3;
  if (computerChoice <= 1) {
    computerChoice = option1;
  } else if (computerChoice <= 2) {
    computerChoice = option2;
  } else {
    computerChoice = option3;
  }
  return computerChoice;
}

//  Create a prompt where users can input their choice between rock, paper or scissors

function getHumanChoice() {
  let humanChoice = prompt('Computer wants to play "Rock-Paper-Scissors" with you! Choose between rock, paper or scissors. Type it below.', 'rock, paper, scissors').toLowerCase();
  return humanChoice;
}

//  Create a way to provide points to either the computer or user depending who wins per round.
let humanScore = 0;
let computerScore = 0;
//  Create a way to check which wins between rock, paper and scissors choice

//  Make the game a best of five rounds or first to three wins. 


function playGame() {

  const humanSelection = getHumanChoice();
  const computerSelection = getComputerChoice();

    function playRound(humanChoice, computerChoice) {
      if (humanSelection == 'rock' && computerSelection == 'rock'
        || humanSelection == 'paper' && computerSelection == 'paper'
        || humanSelection == 'scissors' && computerSelection == 'scissors'
      ) {
        console.log(`You chose ${humanSelection}.`);
        console.log(`Computer chose ${computerSelection}, it's a tie!`);
      } else if (humanSelection == 'paper' && computerSelection == 'rock'
        || humanSelection == 'rock' && computerSelection == 'scissors'
        || humanSelection == 'scissors' && computerSelection == 'paper'
      ) {
        console.log(`You chose ${humanSelection}.`);
        console.log(`Computer chose ${computerSelection}, ${humanSelection} beats ${computerSelection}! Nice!`);
        humanScore++;
      } else if (humanSelection == 'rock' && computerSelection == 'paper'
        || humanSelection == 'paper' && computerSelection == 'scissors'
        || humanSelection == 'scissors' && computerSelection == 'rock'
      ) {
        console.log(`You chose ${humanSelection}.`);
        console.log(`Computer chose ${computerSelection}, ${computerSelection} beats ${humanSelection}! Aw.`);
        computerScore++;
      } else {
        alert('Try again bro. Only rock, paper, or scissors this time.');
      }
    }

  playRound(humanSelection, computerSelection);
  console.log(`Your score: ${humanScore}`);
  console.log(`Computer score: ${computerScore}`);
}

for (i = 0; i < 5; i++) {
  playGame();
}

if (humanScore > computerScore) {
  console.log(`Final Score: ${humanScore}:${computerScore}, in favor of you! Congratulations, you won the game!`);
} else if (humanScore < computerScore) {
  console.log(`Final Score: ${humanScore}:${computerScore}, in favor of computer! Better luck next time bud, you lost!`);
} else {
  console.log(`Final Score: ${humanScore}:${computerScore}, in favor of ...a tie?!`);
}


