console.log('Hello World!')


//  Pseudocode for Rock Paper and Scissors game

//  Create a function for the computer to randomly generate a choice between rock, paper and scissors
//
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
  let humanChoice = prompt('Choose between rock, paper or scissors. Type it below.', 'rock, paper, scissors').toLowerCase();
  return humanChoice;
}

//  Create a way to provide points to either the computer or user depending who wins per round.
let humanScore = 0;
let computerScore = 0;

// //  Create a way to check which wins between rock, paper and scissors choice

function playRound(humanChoice, computerChoice) {
  if (humanSelection == 'rock' && computerSelection == 'rock'
    || humanSelection == 'paper' && computerSelection == 'paper'
    || humanSelection == 'scissors' && computerSelection == 'scissors'
  ) {
    console.log('Tie!');
  } else if (humanSelection == 'paper' && computerSelection == 'rock'
    || humanSelection == 'rock' && computerSelection == 'scissors'
    || humanSelection == 'scissors' && computerSelection == 'paper'
  ) {
    console.log('You won!');
    humanScore++;
  } else if (humanSelection == 'rock' && computerSelection == 'paper'
    || humanSelection == 'paper' && computerSelection == 'scissors'
    || humanSelection == 'scissors' && computerSelection == 'rock'
  ) {
    console.log('You lost!');
    computerScore++;
  } else {
    alert('Come on man!')
  }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);


// //  Make the game a best of five rounds or first to three wins. 