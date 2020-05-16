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

function gameOver(winner) {
    console.log(`${winner} won this game.`);
    rl.close();
    process.exit();
}

function gameStatus(computerScore, playerScore) {
    if (computerScore == 10)
        gameOver("Computer");
    else if (playerScore == 10)
        gameOver("Player");
    else
        init();
}

function printScore(computerScore, playerScore) {
    console.log(`Actual Score :`);
    console.log(`Computer : ${computerScore}`);
    console.log(`Player   : ${playerScore}`);
}

function printInput(answer, randomNumber) {
    console.log(`Your input     : ${answer}`);
    console.log(`Computer input : ${randomNumber}`);
}

function compareValues(answer, randomNumber, computerScore, playerScore) {
    if (answer > randomNumber) {
        if (answer - randomNumber == 2) {
            playerScore += 1;
            console.log (`1 - playerScore = ${playerScore} / computerScore = ${computerScore}`);
            console.log(`Player won this round`);
        }
        else {
            computerScore += 1;
            console.log (`1 - playerScore = ${playerScore} / computerScore = ${computerScore}`);
            console.log(`Computer won this round`);
        }
    }
    else if (randomNumber > answer) {
        if (randomNumber - answer == 2) {
            computerScore += 1;
            console.log (`1 - playerScore = ${playerScore} / computerScore = ${computerScore}`);
            console.log(`Computer won this round`);
        }
        else {
            playerScore += 1;
            console.log (`1 - playerScore = ${playerScore} / computerScore = ${computerScore}`);
            console.log(`Player won this round`);
        }
    }
    else
        console.log(`Nobody won this round`);
}

function checkUserInput(answer, randomNumber) {
    var computerScore = 0;
    var playerScore = 0;

    if (answer >= 0 && answer <= 2) {
        printInput(answer, randomNumber);
        compareValues(answer, randomNumber, computerScore, playerScore);
        printScore(computerScore, playerScore);
    }
    else if (answer < 0) {
        console.log(`END OF THE PROGRAM - INTERRUPTED BY USER`);
        rl.close();
        process.exit();
    }
    else {
        console.log(`Bad input...`)
        init();
    }
    gameStatus(computerScore, playerScore);
}

function init() {
    rl.question(`Insert a number between 0 and 2 : `, (answer) => {
        checkUserInput(answer, Math.round(Math.random() * 2));
    })
}

function zeroTwoGame() {
    console.log(`===============================`);
    console.log(`### Zero - Two Game Program ###`);
    console.log(`===============================`);


    init();

}

zeroTwoGame();
