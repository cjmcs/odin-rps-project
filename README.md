# odin-rps-project - Part 1
The Odin Project - Rock, Paper, Scissors game

This Project shows a consolidation of JS Knowledge learned so far via the Odin Project. The Aim of this project was to create a Rock, Paper, Scissors game using JS variables and functions to allow for 5 rounds of the game and announcing a winner at the end.

I had a few iterations of this game before i was satisfied that i met the project brief. There is a second part to this project which will come later on to explore DOM manipulation to run the game on html.

## Reflection
I had a few iterations of this game before i was satisfied that i met the project brief. Overall i am happy with what i have achieved on this so far. I know there is definitely room for improvement and i look to refine my code in the next part of the project. The second part to this project which will come later on will explore DOM manipulation to run the game on html.

## pseudocode
set human score to 0 </br>
set computer score to 0 </br>
define human choice </br>
define computer choice </br>

// Computer choice selection </br>
define an array with items 'rock' 'paper' & 'scissors’</br>
randomly select an option from the three choices in array</br>
return computer choice

// human choice selection </br>
prompt for rock, paper or scissors </br>
convert to lower case </br>
return human choice </br>
validate human choice & re-prompt if invalid </br>

//human choice validation </br>
if human selection is not equal to ‘rock’ or ‘paper or ‘scissors’ </br>
prompt for valid selection until valid selection used </br>
pass back valid selection to the human selection function </br>

//game round 1 </br>
human choice equals human choice function </br>
computer choice = computer choice function </br>
if human selection is rock and computer selection is scissors </br>
then human beats computer </br>
human point </br>
if human selection equals paper and computer selection is rock </br>
then human beats computer </br>
human point </br>
if human selection is scissors and computer election is paper </br>
then human beats computer </br>
human point. </br>

Reverse options for computer selection and points </br>

if computer selection is same as human selection then tie </br>
both points gained </br> 

//full game 5 rounds </br>
if round is less than 5 then loop play round function </br>
if round is equal to 4 and human score is greater than computer </br>
human wins </br>

inverse for computer win or loop 5 rounds if tie at round 4 </br>

log human and computer score </br>
announce winner </br>

