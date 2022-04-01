let humanScore = 0
let ComputerScore = 0

function computerPlay() {
  const rpsAction = ['rock', 'paper', 'scissors'];
  console.log(rpsAction);
  const computerSelection = rpsAction[Math.floor(Math.random() * rpsAction.length)];
  // console.log(`computer choice is ${computerSelection}`);
  return computerSelection;
}

function humanPlay() {
  let humanSelection = prompt('Rock Paper or Scissors');
  humanSelection = humanSelection.toLowerCase();
  // console.log(`human choice is ${humanSelection}`);
  return humanSelection;
}

// const computerSelection = computerPlay();
// const humanSelection = humanPlay();

function playRound() {
const computerSelection = computerPlay();
const humanSelection = humanPlay();
  if (playRound) {
    if (humanSelection === 'rock' && computerSelection === 'scissors' ||
      humanSelection === 'paper' && computerSelection === 'rock' ||
      humanSelection === 'scissors' && computerSelection === 'paper') {
      console.log(`human wins ${humanSelection} beats ${computerSelection}`);
    humanScore++
    } else if (humanSelection === computerSelection) {
      console.log(`it\'s a tie! both selected ${humanSelection}`);
    humanScore++ && ComputerScore++
    } else if (computerSelection === 'rock' && humanSelection === 'scissors' ||
      computerSelection === 'paper' && humanSelection === 'rock' ||
      computerSelection === 'scissors' && humanSelection === 'paper') {
      console.log(`computer wins ${computerSelection} beats ${humanSelection}`);
    ComputerScore++
    } else console.log('there has been an error');
  }
  console.log(`Your score is: ${humanScore} and AI score is ${ComputerScore}`)
  // console.log(`computer selection is ${computerSelection} and human selection is ${humanSelection}`)
}

// playRound(computerSelection, humanSelection);
// console.log(`computer selection is ${computerSelection} and human selection is ${humanSelection}`)

function playGame(){
  for (let counter = 0; counter <5; counter++){
    playRound(counter);
  }
}

playGame()