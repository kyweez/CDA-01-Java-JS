/**
* The computer and the player choose a number that can only take 3 values: 0, 1 or 2.
* The the computer will simulate its choice by generation of a random number.
* If the difference between the numbers chosen is:
*      ▪ 2: the player who proposed the highest number wins a point.
*      ▪ 1: the player who proposed the lowest number wins a point.
*      ▪ 0: no points are scored.
* The game ends when one of the two players (the computer or the human player) scored 10 points
* or when the player introduces a negative number which indicates he wants to stop playing.
*/
const readline = require(`readline`);
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
function printInput(answer, randomNumber) {
    console.log(`Your input     : ${answer}`);
    console.log(`Computer input : ${randomNumber}`);
}

function compareValues(answer, randomNumber, computerScore, playerScore) {
    if (answer > randomNumber) {
        if (answer - randomNumber == 2) {
            playerScore++;
            console.log(`Player won this round`);
        }
        else {
            computerScore++;
            console.log(`Computer won this round`);
        }
    }
    else if (randomNumber > answer) {
        if (randomNumber - answer == 2) {
            computerScore++;
            console.log(`Computer won this round`);
        }
        else {
            playerScore++;
            console.log(`Player won this round`);
        }
    }
    else
        console.log(`Nobody won this round`);
}

function checkUserInput(answer, randomNumber, computerScore, playerScore) {
    if (answer >= 0 && answer <= 2) {
        printInput(answer, randomNumber);
        compareValues(answer, randomNumber, computerScore, playerScore);
        printScore (computerScore, playerScore);
    }
    else if (answer < 0) {
        console.log(`END OF THE PROGRAM - INTERRUPTED BY USER`);
        rl.close();
        process.exit();
    }
    else
        init();

}

function init(computerScore, playerScore) {
    rl.question(`Insert a number between 0 and 2 : `, (answer) => {
        checkUserInput(answer, Math.round(Math.random() * 2), computerScore, playerScore);
    })
}

function zeroTwoGame() {
    console.log(`===============================`);
    console.log(`### Zero - Two Game Program ###`);
    console.log(`===============================`);
    let computerScore = 0;
    let playerScore = 0;
    init(computerScore, playerScore);

}

zeroTwoGame();
