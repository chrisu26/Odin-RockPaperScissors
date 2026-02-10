console.log("Hello World");

let humanScore = 0;
let computerScore = 0;
let round1;
let round2;
let round3;
let round4;
let round5;

function getComputerChoice(min , max){

    min = 0;
    max = 2;
    result = Math.floor(Math.random() * (max - min + 1)) + min;

    switch (result) {

        case 0:
            return "Rock";
            break;
        
        case 1:
            return "Paper";
            break;

        case 2:
            return "Scissor";
            break;

    }
}    



let humanResult;

function getHumanChoice(humanChoose){

    humanChoose = prompt("Rock, Paper or Scissor?");

    if (humanChoose.toLowerCase() === "rock") {
        return "Rock";

    } else if (humanChoose.toLowerCase() === "paper") {
        return "Paper";



    } else if (humanChoose.toLowerCase() === "scissor") {
        return "Scissor";


    }   else {
        return "Error";

    }

    }




function playRound (humanChoice, computerChoice) {

    let resultH;
    let resultC;

    switch (humanChoice) {

        case "Rock":
            resultH = "R";
            break;

        case "Paper":
            resultH = "P";
            break;

        case "Scissor":
            resultS = "S";
            break;

    }

    switch (computerChoice) {

        case "Rock":
            resultC = "R";
            break;

        case "Paper":
            resultC = "P";
            break;

        case "Scissor":
            resultC = "S";
            break;
            
    }

    let finalResult = resultH + resultC;

        if (finalResult == "PP" || finalResult == "SS" || finalResult == "RR") {

        return `Your ${humanChoice} Draw with Computer's ${computerChoice}!!`;

        } else if (finalResult == "PR" || finalResult == "SP" || finalResult == "RS") {
        ++humanScore;
        return `Your ${humanChoice} beats Computer's ${computerChoice}!!!`;

        } else if (finalResult == "PS" || finalResult == "SR" || finalResult == "RP") {

        ++computerScore;
        return `Computer's ${computerChoice} beats your ${humanChoice}!!!`;


}
}

let humanSelection = getHumanChoice();
let computerSelection = getComputerChoice();

round1 = playRound(humanSelection, computerSelection);
console.log(round1);
console.log(`You: ${humanScore}`);
console.log(`Computer: ${computerScore}`);


let humanSelection2 = getHumanChoice();
let computerSelection2 = getComputerChoice();
round2 = playRound(humanSelection2, computerSelection2);
console.log(round2);
console.log(`You: ${humanScore}`);
console.log(`Computer: ${computerScore}`);

let humanSelection3 = getHumanChoice();
let computerSelection3 = getComputerChoice();
round3 = playRound(humanSelection3, computerSelection3);
console.log(round3);
console.log(`You: ${humanScore}`);
console.log(`Computer: ${computerScore}`);

let humanSelection4 = getHumanChoice();
let computerSelection4 = getComputerChoice();
round4 = playRound(humanSelection4, computerSelection4);
console.log(round4);
console.log(`You: ${humanScore}`);
console.log(`Computer: ${computerScore}`);

let humanSelection5 = getHumanChoice();
let computerSelection5 = getComputerChoice();
round5 = playRound(humanSelection5, computerSelection5);
console.log(round5);
console.log(`You: ${humanScore}`);
console.log(`Computer: ${computerScore}`);

if (humanScore > computerScore) {

    console.log("You Win!");

} else if (humanScore < computerScore) {

    console.log("Computer Win!");
} else if (humanScore === computerScore) {


    console.log("You and Computer Draws, no winner no loser!");
}

console.log(`You: ${humanScore} VS Computer: ${computerScore}`);

