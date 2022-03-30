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
        //add code here
     // console.log(`compjjuter selection is ${computerSelection} and human selection is ${humanSelection}`)

}

playRound(computerSelection, humanSelection)
console.log(`computer selection is ${computerSelection} and human selection is ${humanSelection}`)
