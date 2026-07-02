//define the array containing rock, paper and scissors
const value =['rock', 'paper','scissor'];
//define the function to let the computer choose random values out of the three
function getComputerChoice() {
    let j = Math.floor(Math.random()*3);
    return value[j];
}

//get the input from the user.
const btns = document.createElement('div');
btns.classList.add('buttons');
const div = document.createElement('div');

const rckbtn = document.createElement('button');
rckbtn.id = 'rock';
rckbtn.textContent = 'Rock';

const pprbtn = document.createElement('button');
pprbtn.id = 'paper';
pprbtn.textContent = 'Paper';

const szrbtn = document.createElement('button');
szrbtn.id = 'scissor';
szrbtn.textContent = 'Scissor';

const para = document.createElement('p');
const finalResult = document.createElement('h3');

let humanScore = 0;
let computerScore = 0;
let result = '';

function playRound (humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        result = 'tie';
        para.textContent = `Your Choice: ${humanChoice}, Computer choice: ${computerChoice}, your current score: ${humanScore}, Computer's current Score: ${computerScore}`;
    }
    else if (humanChoice === 'rock') {
        if (computerChoice === 'paper') {
            result = 'Computer Wins';
            computerScore++;
            para.textContent = `Your Choice: ${humanChoice}, Computer choice: ${computerChoice}, your current score: ${humanScore}, Computer's current Score: ${computerScore}`;
        }
        else if (computerChoice === 'scissor') {
            result = 'You win!';
            humanScore++;
            para.textContent = `Your Choice: ${humanChoice}, Computer choice: ${computerChoice}, your current score: ${humanScore}, Computer's current Score: ${computerScore}`;
        }
    }
    else if (humanChoice === 'paper') {
        if (computerChoice === 'rock') {
            result = 'You Wins';
            humanScore++;
            para.textContent = `Your Choice: ${humanChoice}, Computer choice: ${computerChoice}, your current score: ${humanScore}, Computer's current Score: ${computerScore}`;
        }
        else if (computerChoice === 'scissor') {
            result = 'Computer wins!';
            computerScore++;
            para.textContent = `Your Choice: ${humanChoice}, Computer choice: ${computerChoice}, your current score: ${humanScore}, Computer's current Score: ${computerScore}`;
        }
    }
    else if (humanChoice === 'scissor') {
        if (computerChoice === 'rock') {
            result = 'Computer Wins';
            computerScore++;
            para.textContent = `Your Choice: ${humanChoice}, Computer choice: ${computerChoice}, your current score: ${humanScore}, Computer's current Score: ${computerScore}`;
        }
        else if (computerChoice === 'paper') {
            result = 'You win!';
            humanScore++;
            para.textContent = `Your Choice: ${humanChoice}, Computer choice: ${computerChoice}, your current score: ${humanScore}, Computer's current Score: ${computerScore}`;
        }
        
    }
    return [result, humanScore, computerScore];
}

rckbtn.addEventListener('click', (e) => {
    playRound('rock', getComputerChoice());
    if (humanScore === computerScore && humanScore === 5) {
    finalResult.textContent = 'You both scored the same, its a tie!';
    }
    else if (humanScore > computerScore && humanScore === 5) {
        finalResult.textContent = 'You win!';
    }

    else if (humanScore < computerScore && computerScore === 5) {
        finalResult.textContent = 'Computer wins!';
    }
});
pprbtn.addEventListener('click', (e) => {
    playRound('paper', getComputerChoice())
    if (humanScore === computerScore && humanScore === 5) {
    finalResult.textContent = 'You both scored the same, its a tie!';
    }
    else if (humanScore > computerScore && humanScore === 5) {
        finalResult.textContent = 'You win!';
    }

    else if (humanScore < computerScore && computerScore === 5) {
        finalResult.textContent = 'Computer wins!';
    }
});
szrbtn.addEventListener('click', (e) => {
    playRound('scissor', getComputerChoice())
    if (humanScore === computerScore && humanScore === 5) {
        finalResult.textContent = 'You both scored the same, its a tie!';
    }
    else if (humanScore > computerScore && humanScore === 5) {
        finalResult.textContent = 'You win!';
    }

    else if (humanScore < computerScore && computerScore === 5) {
        finalResult.textContent = 'Computer wins!';
    }
});

btns.appendChild(rckbtn);
btns.appendChild(pprbtn);
btns.appendChild(szrbtn);
div.appendChild(para);
div.appendChild(finalResult);
document.body.appendChild(btns);
document.body.appendChild(div);
