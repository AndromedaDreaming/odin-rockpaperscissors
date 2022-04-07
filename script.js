//Pseudocode-- 
//User prompted to choose "rock", "paper", or "scissors"
//The computer randomly chooses as well
//Rock beats scissors
//Paper beats rock
//Scissors beats paper

//If user chooses rock and computer chooses rock
//Then it's a tie
//Else if computer chooses paper
//Then computer wins
//Else if computer chooses scissors
//Then user wins

//If user chooses paper and computer chooses paper
//Then it's a tie
//Else if computer chooses scissors
//Then computer wins
//Else if computer chooses rock
//Then user wins

//If user chooses scissors and computer chooses scissors
//Then it's a tie
//Else if computer chooses rock
//Then computer wins
//Else if computer chooses paper
//Then user wins

// JavaScript goes here
const rockBtn = document.getElementById("rock");
const paperBtn = document.getElementById("paper");
const scissorBtn = document.getElementById("scissors");

let userScore = 0;
let computerScore = 0;
let playerSelection;

const h1 = document.querySelector("h1");
let whoWon = document.createElement("h2");
let mainScore = document.createElement("h3");
const resetBtn = document.createElement("button");
resetBtn.textContent = "Play again!";

//Function for computer random choice
function computerPlay() {
    let random = ["rock", "paper", "scissors"];
    randomChoice = random[Math.floor(Math.random()* random.length)];
    return randomChoice;
}

//Function to play one round
function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection;
    computerSelection = computerPlay();

    let result;
    //Check for tie
        if (userScore < 5 && computerScore < 5) {
            if(playerSelection === computerSelection) {
                result = "It is a tie!";
            }
     //Check for rock
        if(playerSelection === "rock") {
           if(computerSelection === "paper") {
                computerScore++;
                result = "Computer wins! Paper beats rock!"; 
            } else {
                userScore++;
                result = "You win! Rock beats scissors!";
            }
        }
    //Check for paper
        if(playerSelection == "paper") {
            if(computerSelection == "scissors") {
                result = "Computer wins! Scissors beats paper!";
                computerScore++;
            }
            else {
                result = "You win! Paper beats rock!";
                userScore++;
            }
        }
    //Check for scissors
        if(playerSelection == "scissors") {
            if(computerSelection == "rock") {
                result = "Computer wins! Rock beats scissors!";
                computerScore++;
         }
            else {
                result = "You win! Scissors beats paper!";
                userScore++;
         }
        }
        whoWon.textContent = result;
        mainScore.textContent = `Your score: ${userScore}, Computer's score: ${computerScore}`;
        return result;
    } if (userScore === 5) {
        mainScore.textContent = `Your score: ${userScore}, Computer's score: ${computerScore}`;
        whoWon.textContent = "You won!";
        h1.appendChild(resetBtn);
    } if (computerScore === 5) {
        mainScore.textContent = `Your score: ${userScore}, Computer's score: ${computerScore}`;
        whoWon.textContent = "Sorry! The computer won this time!";
        h1.appendChild(resetBtn);
    }
       
}
//User button event listener
rockBtn.addEventListener('click', (e) => {
    console.log(playRound(e.target.id, computerPlay));
})

paperBtn.addEventListener('click', (e) => {
    console.log(playRound(e.target.id, computerPlay));
})

scissorBtn.addEventListener('click', (e) => {
    console.log(playRound(e.target.id, computerPlay));
})

resetBtn.addEventListener('click', () => {
    resetGame();
})

function resetGame() {
    userScore = parseInt(0);
    computerScore = parseInt(0);
    mainScore.textContent = `Your score: ${userScore}, Computer's score: ${computerScore}`;
    h1.removeChild(resetBtn);
}

h1.appendChild(whoWon);
whoWon.textContent = "Let's play!";
h1.appendChild(mainScore);
mainScore.textContent = `Your score: ${userScore}, Computer's score: ${computerScore}`;
