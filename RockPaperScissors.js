// console.log("Hello World");

function getComputerChoice(choice){
   let n = Math.floor(Math.random() * 3);
   

   //conditionals to determine choice
   if(n === 0){
    choice = "Rock";
   }
   else if (n === 1){
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



// A function that plays a round
function playRound(humanChoice, computerChoice){
    //player and computer choose the same thing
    if(humanChoice.toLowerCase() === computerChoice){
        console.log("It's a Draw!");
    }
    //human wins
    if((humanChoice.toLowerCase() === "rock" && computerChoice === "Scissors") || (humanChoice.toLowerCase() === "paper" && computerChoice === "Rock") || (humanChoice.toLowerCase() === "scissors" && computerChoice === "Paper")) {
        console.log("Round Winner: Player");
        humanScore++;
    }
    else{
        console.log("Round Winner: Computer")
        computerScore++;
    }
   

}

let humanScore = 0, computerScore = 0;

// playRound(humanSelection, computerSelection); //plays a round of Rock, Paper Scissors

function playGame(){
    for(i = 0; i < 5; i++){
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();

        playRound(humanSelection, computerSelection);
    }

    if(humanScore > computerScore){
        console.log("Player Wins the Game! :)");
    }
    else if(computerScore < humanScore){
        console.log("Computer Wins the Game...how sad :(");
    }
    else{
        console.log("It's a draw....bummer :/")
    }

}

playGame();
