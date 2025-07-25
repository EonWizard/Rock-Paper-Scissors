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