//define the array containing rock, paper and scissors
const value =['rock', 'paper','scissor'];
//define the function to let the computer choose random values out of the three
function getComputerChoice() {
    let j = Math.floor(Math.random()*3);
    //console.log(value[j]);
    return value[j];
}

//get the input from the user.
let result;
function getHumanChoice () {
    const humanInput = prompt('Enter your value to start', '');
    const humanInputNew = humanInput.toLowerCase();
    return humanInputNew; 
}

let humanScore = 0;
let computerScore = 0;
function playRound (humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        result = 'tie';
        console.log(`Your Choice: ${humanChoice}, Computer choice: ${computerChoice}, your current score: ${humanScore}, Computer's current Score: ${computerScore}`);
    }
    else if (humanChoice === 'rock') {
        if (computerChoice === 'paper') {
            result = 'Computer Wins';
            computerScore++;
            console.log(`Your Choice: ${humanChoice}, Computer choice: ${computerChoice}, your current score: ${humanScore}, Computer's current Score: ${computerScore}`);
        }
        else if (computerChoice === 'scissor') {
            result = 'You win!';
            humanScore++;
            console.log(`Your Choice: ${humanChoice}, Computer choice: ${computerChoice}, your current score: ${humanScore}, Computer's current Score: ${computerScore}`);
        }
    }
    else if (humanChoice === 'paper') {
        if (computerChoice === 'rock') {
            result = 'You Wins';
            humanScore++;
            console.log(`Your Choice: ${humanChoice}, Computer choice: ${computerChoice}, your current score: ${humanScore}, Computer's current Score: ${computerScore}`);
        }
        else if (computerChoice === 'scissor') {
            result = 'Computer wins!';
            computerScore++;
            console.log(`Your Choice: ${humanChoice}, Computer choice: ${computerChoice}, your current score: ${humanScore}, Computer's current Score: ${computerScore}`);
        }
    }
    else if (humanChoice === 'scissor') {
        if (computerChoice === 'rock') {
            result = 'Computer Wins';
            computerScore++;
            console.log(`Your Choice: ${humanChoice}, Computer choice: ${computerChoice}, your current score: ${humanScore}, Computer's current Score: ${computerScore}`);
        }
        else if (computerChoice === 'paper') {
            result = 'You win!';
            humanScore++;
            console.log(`Your Choice: ${humanChoice}, Computer choice: ${computerChoice}, your current score: ${humanScore}, Computer's current Score: ${computerScore}`);
        }
        
    }

    return {result};
}
const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();
//playRound(humanSelection, computerSelection);

function playGame () {
    for (let i = 0; i < 5; i++) {
        playRound(getHumanChoice(), getComputerChoice());    
    }
}

playGame();
if (humanScore === computerScore) {
    finalResult = 'You both scored the same, its a tie!';
}
else if (humanScore > computerScore) {
    finalResult = 'You win!';
}

else if (humanScore < computerScore) {
    finalResult = 'Computer wins!';
}
console.log(`Your score: ${humanScore} and computer score: ${computerScore}, ${finalResult}`);
