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


function playGame() {
    function playRound() {
        const humanSelection = getHumanChoice().toLowerCase();
        const computerSelection = getComputerChoice()

        if (humanSelection === "rock") {
            if (computerSelection === "scissors") {
                humanScore += 1;
                alert("You win! Rock beats scissors");
            } else if (computerSelection === "paper") {
                computerScore += 1;
                alert("You lose! Paper beats rock.");
            } else {
                alert("It's a tie!");
            }
    
        } else if (humanSelection === "scissors") {
            if (computerSelection === "paper") {
                humanScore += 1;
                alert("You win! Scissors beats paper");
            } else if (computerSelection === "rock") {
                computerScore += 1;
                alert("You lose! Rock beats scissors!");
            } else {
                alert("It's a tie!");
            }
    
        } else if (humanSelection === "paper") {
            if (computerSelection === "rock") {
                humanScore += 1;
                alert("You win! Paper beats rock");
            } else if (computerSelection === "scissors") {
                computerScore += 1;
                alert("You lose! Scissors beats paper.");
            } else {
                alert("It's a tie!")
            }
        }

        console.log(`The score is ${humanScore} to ${computerScore}!`);
    }

    playRound();
    playRound();
    playRound();
    playRound();
    playRound();

    if (humanScore > computerScore) {
        alert("You win the game!");
    } else if (computerScore > humanScore) {
        alert("You lose the game!");
    } else {
        alert("It's a tie game!");
    }
}

playGame();
