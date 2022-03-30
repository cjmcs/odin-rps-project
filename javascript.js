
////COMPUTER SELECTION////
//define list of playable characters
//randomly select a character from list of playable characters
//print assigned character



let humanScore = 0
let computerScore = 0

function computerPlay() {
    const rpsAction = ['Rock', 'Paper', 'Scissors'];
    // console.log(characters)
    let computerSelection = rpsAction[Math.floor(Math.random() * rpsAction.length)];
    console.log(`computer choice is ${computerSelection}`)
    return computerSelection;
}

computerPlay()

function humanPlay(){
    let humanSelection = prompt('Rock Paper or Scissors')
    humanSelection = humanSelection.toLowerCase()
    console.log(`human choice is ${humanSelection}`)
    return  humanSelection;
    }
    
    humanPlay()

   