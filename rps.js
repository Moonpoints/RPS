function getComputerChoice() {
 let val = Math.random(); 
 if (val < .33 ) {
    return "Rock"
 } else if (val <.66) {
    return "Paper"
 } else return "Scissors"
 
 }
 
function getHumanChoice() {
    const userPick = prompt("Choose one: Rock, Paper, Scissors");
    let lowUserPick = userPick.toLowerCase()
    if (lowUserPick == "rock") {
        return "Rock"
    } else if (lowUserPick == "paper") {
        return "Paper"
    } else if (lowUserPick == "scissors"){
        return "Scissors"
    }
 }

 function playGame(getComputerChoice, getHumanChoice){
     let humanScore = 0;
     let computerScore = 0;
    for (let i = 0; i < 5; i++ ){   
let humanChoice = getHumanChoice();
let computerChoice = getComputerChoice();
function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice){
        return "Tie"
    } else if (humanChoice == "Rock" && computerChoice == "Paper") {
        return ("You lose! Paper beats Rock")
    } else if (humanChoice == "Rock" && computerChoice == "Scissors") {
        return ("You win! Rock beats Scissors")
    } else if (humanChoice == "Paper" && computerChoice == "Rock") {
        return ("You win! Paper beats Rock")
    } else if (humanChoice == "Paper" && computerChoice == "Scissors") {
        return ("You lose! Scissors beats Paper")
    } else if (humanChoice == "Scissors" && computerChoice == "Rock") {
        return ("You lose! Rock beats Scissors")
    } else if (humanChoice == "Scissors" && computerChoice == "Paper") {
        return ("You win! Scissors beat Paper")
 }
}

let result = playRound(humanChoice, computerChoice);
console.log(result);

function getScore(result) {
    if (result.includes("win!")) {
        humanScore += 1 ;
    } else if (result.includes("lose!")) {
       computerScore += 1;
    }

}

getScore(result);

let score = "Player: " + humanScore + " | Computer: " + computerScore;
console.log(score)
}
function finalScore(humanScore, computerScore){
    if (humanScore === computerScore) {
        return "You Tied."
    } else if (humanScore < computerScore) {
        return "Sorry, You Lost."
    } else if (humanScore > computerScore) {
        return "Congratulations, You Won!" 
    }
}
console.log("Game Over. Final Score: Player - " + humanScore + " | Computer - " + computerScore )
console.log(finalScore(humanScore, computerScore))
 }
 
 playGame(getComputerChoice, getHumanChoice)