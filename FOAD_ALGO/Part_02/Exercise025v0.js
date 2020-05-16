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

function gameStatus(score) {
    if (score[0] == 10)
        gameOver("Computer");
    else if (score[1] == 10)
        gameOver("Player");
    else
        init(score);
}

function printScore(score) {
    console.log(score);
    console.log(`Actual Score :`);
    console.log(`Computer : ${score[0]}`);
    console.log(`Player   : ${score[1]}`);
}

function printInput(answer, randomNumber) {
    console.log(`Your input     : ${answer}`);
    console.log(`Computer input : ${randomNumber}`);
}

function compareValues(answer, randomNumber, score) {
    if (answer > randomNumber) {
        if (answer - randomNumber == 2) {
            score[1] += 1;
            console.log(`Player won this round`);
        }
        else {
            score[0] += 1;
            console.log(`Computer won this round`);
        }
    }
    else if (randomNumber > answer) {
        if (randomNumber - answer == 2) {
            score[0] += 1;
            console.log(`Computer won this round`);
        }
        else {
            score[1] += 1;
            console.log(`Player won this round`);
        }
    }
    else
        console.log(`Nobody won this round`);
}

function checkUserInput(answer, randomNumber, score) {
    if (answer >= 0 && answer <= 2) {
        printInput(answer, randomNumber);
        compareValues(answer, randomNumber, score);
        printScore(score);
    }
    else if (answer < 0) {
        console.log(`END OF THE PROGRAM - INTERRUPTED BY USER`);
        rl.close();
        process.exit();
    }
    else {
        console.log(`Bad input...`);
        init(score);
    }
    gameStatus(score);
}

function init(score) {
    rl.question(`Insert a number between 0 and 2 : `, (answer) => {
        checkUserInput(answer, Math.round(Math.random() * 2), score);
    })
}

function zeroTwoGame() {
    console.log(`===============================`);
    console.log(`### Zero - Two Game Program ###`);
    console.log(`===============================`);

    var score = new Int32Array(2);
    score[0] = 0;
    score[1] = 0;

    init(score);

}

zeroTwoGame();