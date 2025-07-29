// console.log("Hello World");

function getComputerChoice(choice){
   let n = Math.random() * 100;
   

   //conditionals to determine choice
   if(n <= 33){
    choice = "Rock";
   }
   else if (33 < n  && n <= 66){
    choice = "Paper";
   }
   else{
    choice = "Scissors";
   }
   return choice;
}
// console.log(getComputerChoice()); Checks to make sure getComputerChoice works

function getHumanChoice(choice){
    let rpsChoice = prompt("Rock, Paper, or Scissors?");

    //conditionals to determine choice
    if(rpsChoice.toLowerCase() === "rock"){
        choice = "Rock";
    }
    else if(rpsChoice.toLowerCase() === "paper"){
        choice = "Paper";
    }
    else if(rpsChoice.toLowerCase() === "scissors"){
        choice = "Scissors";
    }
    else{
        console.log("Invalid Input");
    }

    return choice;
}

// console.log(getHumanChoice()); Checks to make sure getHumanChoice works

let humanScore = 0, computerScore = 0;

// A function that plays a round
function playRound(humanChoice, computerChoice){
    //player chooses rock
    if(humanChoice.toLowerCase() === "rock" && computerChoice === "Rock"){
        console.log("It's a Draw!");
    }
    else if(humanChoice.toLowerCase() === "rock" && computerChoice === "Paper"){
        console.log("Computer Player Wins!");
        computerScore = computerScore + 1;
    }
    else if(humanChoice.toLowerCase() === "rock" && computerChoice === "Scissors"){
        console.log("Player Wins!");
        humanScore = humanScore + 1;
    }
    //player chooses paper
    if(humanChoice.toLowerCase() === "paper" && computerChoice === "Rock"){
        console.log("Player Wins!");
        humanScore = humanScore + 1;
    }
    else if(humanChoice.toLowerCase() === "paper" && computerChoice === "Paper"){
        console.log("It's a Draw!");
        
    }
    else if(humanChoice.toLowerCase() === "paper" && computerChoice === "Scissors"){
        console.log("Computer Player Wins!");
        computerScore = computerScore + 1;
        
    }
    //player chooses scissors
    if(humanChoice.toLowerCase() === "scissors" && computerChoice === "Rock"){
        console.log("Computer Player Wins!");
        computerScore = computerScore + 1;
        
    }
    else if(humanChoice.toLowerCase() === "scissors" && computerChoice === "Paper"){
        console.log("Player Wins!");
        humanScore = humanScore + 1;
        
    }
    else if(humanChoice.toLowerCase() === "scissors" && computerChoice === "Scissors"){
        console.log("It's a Draw");
        
        
    }
    console.log("Human Score: " + humanScore);
    console.log("Computer Score: " + computerScore);
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

// playRound(humanSelection, computerSelection); //plays a round of Rock, Paper Scissors

function playGame(){
    playRound(humanSelection, computerSelection);
    playRound(humanSelection, computerSelection);
    playRound(humanSelection, computerSelection);
    playRound(humanSelection, computerSelection);
    playRound(humanSelection, computerSelection);

    if(computerScore > humanScore){
        console.log("Computer Player Wins The Game!");
    }
    else if(computerScore < humanScore){
        console.log("Player Wins The Game!");
    }
    else{
        console.log("It's a Draw");
    }

}

playGame();