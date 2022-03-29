
////COMPUTER SELECTION////
//define list of playable characters
//randomly select a character from list of playable characters
//print assigned character




function computerPlay() {
    const characters = ['Rock', 'Paper', 'Scissors'];
    // console.log(characters)
    let character = characters[Math.floor(Math.random() * characters.length)];
    console.log(`computer character is ${character}`)
    return character;
}

computerPlay()

