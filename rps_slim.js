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
 let humanScore = 0;
     let computerScore = 0;
 
function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice){
        console.log("Tie");
    } else if (humanChoice == "Rock" && computerChoice == "Paper") {
        console.log("You lose! Paper beats Rock");
        computerScore ++;
    } else if (humanChoice == "Rock" && computerChoice == "Scissors") {
       console.log("You win! Rock beats Scissors");
       humanScore ++;
    } else if (humanChoice == "Paper" && computerChoice == "Rock") {
        console.log("You win! Paper beats Rock");
        humanScore ++;
    } else if (humanChoice == "Paper" && computerChoice == "Scissors") {
        console.log("You lose! Scissors beats Paper");
        computerScore ++;
    } else if (humanChoice == "Scissors" && computerChoice == "Rock") {
        console.log("You lose! Rock beats Scissors");
        computerScore ++;
    } else if (humanChoice == "Scissors" && computerChoice == "Paper") {
        console.log("You win! Scissors beat Paper");
        humanScore ++;
 }
 console.log(`Player: ${humanScore} | Computer: ${computerScore}`)
}

function playGame(){
    for (let i = 0; i < 5; i++) {
    const humanChoice = getHumanChoice();
    const computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);
}
console.log("Game Over. Final Score: Player - " + humanScore + " | Computer - " + computerScore );
if (humanScore < computerScore){
    console.log("Sorry, You Lost.")
}else if (humanScore > computerScore){
    console.log("Congratulations, You Won!" )
} else {
    console.log("You Tied.")
}
}
 playGame();