let humanScore = 0;
let computerScore = 0;
let humanSelection;
let computerSelection;

//Function determines computers choice from an array
function computerPlay(rpsAction, computerSelection) {
  rpsAction = ["rock", "paper", "scissors"];
  console.table(rpsAction); // Checks items in Array
  computerSelection = rpsAction[Math.floor(Math.random() * rpsAction.length)]; //Chooses Selection at random
  console.log(`computer selected ${computerSelection}`)
  return computerSelection; //Returns Selection
}
//Function Determines humans choice from prompt question & converts to lower case
function humanPlay() {
  humanSelection = prompt("Please choose Rock, Paper, or Scissors").toLowerCase();
  validate(); // calls validaton function
  return humanSelection;
}


//Function to validate human input
function validate() {
  if (humanSelection === "rock" ||
    humanSelection === "paper" ||
    humanSelection === "scissors") {
    console.log(`human selection is ${humanSelection}`); // Checks if human selection matches possible selections
    return humanSelection;
  } else if (humanSelection !== "rock" ||
    humanSelection !== "paper" ||
    humanSelection !== "scissors") {
    let localHumanSelection = prompt("invalid response, try again").toLowerCase(); //If human selection does not match then reprompt for valid option
    humanSelection = localHumanSelection;
    validate(); //revalidates until valid option selected
    return humanSelection;
  }
}

//Determines game logic and assigns points to respective score
function playRound() {
  computerSelection = computerPlay(); // calls function to determine computer selection
  humanSelection = humanPlay(); // calls function to determine human selection
  if (playRound) {
    if (humanSelection === "rock" && computerSelection === "scissors" ||
      humanSelection === "paper" && computerSelection === "rock" ||
      humanSelection === "scissors" && computerSelection === "paper") {
      console.log(`human wins round ${humanSelection} beats ${computerSelection}`);
      humanScore++;
    } else if (humanSelection === computerSelection) {
      console.log(`it's a tie! both selected ${humanSelection}`);
      humanScore++;
      computerScore++;
    } else if (computerSelection === "rock" && humanSelection === "scissors" ||
      computerSelection === "paper" && humanSelection === "rock" ||
      computerSelection === "scissors" && humanSelection === "paper") {
      console.log(`computer wins round ${computerSelection} beats ${humanSelection}`);
      computerScore++;
    } else console.log("there has been an error");
  }
  // console.log(`Your score is: ${humanScore} and AI score is ${computerScore}`)
}

//determines how many rounds to loop over
function playGame() {
  let counter;
  for (counter = 0; counter < 5; counter++) {
    playRound();
    if (counter === 4) {
      if (humanScore > computerScore) {
        console.log(`human won game with ${humanScore} points`);
      } else if (computerScore > humanScore) {
        console.log(`computer won game with ${computerScore} points`);
      } else; //console.log("it's a tie!");
    }
  }
  console.log(`humanScore: ${humanScore}, computerScore is: ${computerScore}`);

}
//runs game
playGame();