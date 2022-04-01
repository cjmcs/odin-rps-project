function computerPlay() {
    const rpsAction = ['rock', 'paper', 'scissors'];
    console.log(rpsAction)
    let computerSelection = rpsAction[Math.floor(Math.random() * rpsAction.length)];
    console.log(`computer choice is ${computerSelection}`)
    return computerSelection;

}

function humanPlay() {
    let humanSelection = prompt('Rock Paper or Scissors')
    humanSelection = humanSelection.toLowerCase()
    console.log(`human choice is ${humanSelection}`)
    return humanSelection;
}

const computerSelection = computerPlay()
const humanSelection = humanPlay()



function playRound() {
    if (playRound) {
        if (humanSelection === 'rock' && computerSelection === 'scissors' ||
            humanSelection === 'paper' && computerSelection === 'rock' ||
            humanSelection === 'scissors' && computerSelection === 'paper')
            console.log(`human wins ${humanSelection} beats ${computerSelection}`)
        else if (humanSelection === computerSelection)
            console.log(`it's a tie!`)
        else if (computerSelection === 'rock' && humanSelection === 'scissors' ||
            computerSelection === 'paper' && humanSelection === 'rock' ||
            computerSelection === 'scissors' && humanSelection === 'paper')
            console.log(`computer wins ${computerSelection} beats ${humanSelection}`)
    
        else console.log(`there has been an error`)
    }
    // console.log(`computer selection is ${computerSelection} and human selection is ${humanSelection}`)

}

playRound(computerSelection, humanSelection)
// console.log(`computer selection is ${computerSelection} and human selection is ${humanSelection}`)
