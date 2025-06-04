function getComputerChoice() {
 let val = Math.random(); 
 if (val < .33 ) {
    return "Rock"
 } else if (val <.66) {
    return "Paper"
 } else return "Scissors"
 }
 
 const buttons = document.querySelectorAll(".choice");

buttons.forEach((button)=> {
    button.addEventListener("click", () => {
        humanChoice = button.id;
        const computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);
    });
});

const results = document.querySelector("#results");
let humanScore = 0;
let computerScore = 0;
 
function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice){
        results.textContent = "Tie";
    } else if (humanChoice == "Rock" && computerChoice == "Paper") {
        results.textContent = "You lose! Paper beats Rock";
        computerScore ++;
    } else if (humanChoice == "Rock" && computerChoice == "Scissors") {
       results.textContent = "You win! Rock beats Scissors";
       humanScore ++;
    } else if (humanChoice == "Paper" && computerChoice == "Rock") {
        results.textContent = "You win! Paper beats Rock";
        humanScore ++;
    } else if (humanChoice == "Paper" && computerChoice == "Scissors") {
        results.textContent = "You lose! Scissors beats Paper";
        computerScore ++;
    } else if (humanChoice == "Scissors" && computerChoice == "Rock") {
        results.textContent = "You lose! Rock beats Scissors";
        computerScore ++;
    } else if (humanChoice == "Scissors" && computerChoice == "Paper") {
        results.textContent = "You win! Scissors beat Paper";
        humanScore ++;
 }
 score.textContent = `Player: ${humanScore} | Computer: ${computerScore}`;
 endGame(humanScore, computerScore);
}

function endGame(humanScore, computerScore){
    if (humanScore == 5) {
        results.textContent = "GAME OVER! Congratulations, You Won!";
        score.textContent = "Final Score: Player - " + humanScore + " | Computer - " + computerScore;
         buttons.forEach((button) => {
            button.disabled = true;
            restartButton.style.display = "inline-block";

        });
    } else if ( computerScore == 5) {
        results.textContent = "GAME OVER! Sorry, You Lost.";
        score.textContent = "Final Score: Player - " + humanScore + " | Computer - " + computerScore;
         buttons.forEach((button) => {
            button.disabled = true;
            restartButton.style.display = "inline-block";

        });
}
}

const restartButton = document.querySelector("#restart")

restartButton.addEventListener("click", () => {
    humanScore = 0;
    computerScore = 0;
    results.textContent = "";
    score.textContent = `Player: ${humanScore} | Computer: ${computerScore}`;
    buttons.forEach((button) => button.disabled = false);
})


