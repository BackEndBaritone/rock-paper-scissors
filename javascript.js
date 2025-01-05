function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3);

    switch(randomNumber) {
        case 0:
            return "rock";
            break;
        case 1:
            return "paper";
            break;
        case 2:
            return "scissors";
    }
}

let getHumanChoice = () => prompt("Rock, Paper, or Scissors?");

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    if (humanSelection === "rock") {
        (computerSelection === "scissors") ? alert("You win! Rock beats scissors.") : 
        (computerSelection === "paper") ? alert("You lose! Paper beats rock.") : 
        alert("It's a tie!");

    } else if (humanSelection === "scissors") {
        (computerSelection === "scissors") ? alert("It's a tie!") : 
        (computerSelection === "paper") ? alert("You win! Scissors beats paper.") : 
        alert("You lose! Rock beats scissors.");

    } else if (humanSelection === "paper") {
        (computerSelection === "scissors") ? alert("You lose! Scissors beats paper") : 
        (computerSelection === "paper") ? alert("It's a tie!") : 
        alert("You win! Paper beats rock.");
    }
}

const humanSelection = getHumanChoice().toLowerCase();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);