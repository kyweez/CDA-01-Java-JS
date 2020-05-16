/**
 * The computer and the player choose a number that can only take 3 values: 0, 1 or 2.
 * The the computer will simulate its choice by generation of a random number.
 * If the difference between the numbers chosen is
 *       ▪ 2: the player who proposed the highest number wins a point.
 *       ▪ 1: the player who proposed the lowest number wins a point.
 *       ▪ 0: no points are scored.
 * The game ends when one of the two players (the computer or the human player) scored 10 points
 * or when the player introduces a negative number which indicates he wants to stop playing.
 */

/**
 * Instanciating readline module
 */
const readline = require(`readline`);
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

/**
 * This function gives the name of the winner and closes the program
 * @param {*} winner (winner name)
 */
function gameOver(winner) {
    console.log(`\n${winner} won this game !!!\n`);
    rl.close();
    process.exit();
}

/**
 * This function checks if the game is over (checking the score)
 * @param {*} score (score table)
 */
function gameStatus(score) {
    if (score[0] == 10)
        gameOver("Computer");
    else if (score[1] == 10)
        gameOver("Player");
    else
        init(score);
}

/**
 * This fucntion displays the current score
 * @param {*} score (score table)
 */
function printScore(score) {
    if (score[0] < 10 && score[1] < 10) {
        console.log(`###################`);
        console.log(`## Current Score ##`);
        console.log(`## Computer : ${score[0]}  ##`);
        console.log(`## Player   : ${score[1]}  ##`);
        console.log(`###################`);
    }
    else {
        console.log(`####################`);
        console.log(`## Current Score  ##`);
        if (score[0] == 10) {
            console.log(`## Computer : ${score[0]}  ##`);
            console.log(`## Player   : ${score[1]}   ##`);
        }
        else {
            console.log(`## Computer : ${score[0]}   ##`);
            console.log(`## Player   : ${score[1]}  ##`);
        }
        console.log(`####################`);
    }
}

/**
 * 
 * @param {*} answer (user input)
 * @param {*} randomNumber (random generated number)
 */
function printInput(answer, randomNumber) {
    console.log(`-----------------------------------`);
    console.log(`Your input     : ${answer}`);
    console.log(`Computer input : ${randomNumber}`);
}

/**
 * This function compares number and sets the results up
 * @param {*} answer (user input)
 * @param {*} randomNumber (random generated number)
 * @param {*} score (score table)
 */
function compareValues(answer, randomNumber, score) {
    if (answer > randomNumber) {
        if (answer - randomNumber == 2) {
            score[1] += 1;
            console.log(`Player won this round`);
            console.log(`-----------------------------------\n`);

        }
        else {
            score[0] += 1;
            console.log(`Computer won this round`);
            console.log(`-----------------------------------\n`);
        }
    }
    else if (randomNumber > answer) {
        if (randomNumber - answer == 2) {
            score[0] += 1;
            console.log(`Computer won this round`);
            console.log(`-----------------------------------\n`);
        }
        else {
            score[1] += 1;
            console.log(`Player won this round`);
            console.log(`-----------------------------------\n`);
        }
    }
    else {
        console.log(`Nobody won this round`);
        console.log(`-----------------------------------\n`);
    }
}

/**
 * This function checks the user input.
 * If input is a negative number, it closes the program
 * If input is bad, call back the init function (with readline)
 * Else the program continues
 * @param {*} answer (user input)
 * @param {*} randomNumber (random generated number)
 * @param {*} score (score table)
 */
function checkUserInput(answer, randomNumber, score) {
    if (answer >= 0 && answer <= 2) {
        printInput(answer, randomNumber);
        compareValues(answer, randomNumber, score);
        printScore(score);
    }
    else if (answer < 0) {
        console.log(`\nEND OF THE PROGRAM - INTERRUPTED BY USER`);
        rl.close();
        process.exit();
    }
    else {
        console.log(`Bad input...`);
        init(score);
    }
    gameStatus(score);
}

/**
 * This function asks the user to input a number and generate a random number
 * @param {*} score (score table)
 */
function init(score) {
    rl.question(`\nInsert a number between 0 and 2 : `, (answer) => {
        checkUserInput(answer, Math.round(Math.random() * 2), score);
    })
}

function zeroTwoGame() {
    console.log(`===============================`);
    console.log(`### Two - Zero Game Program ###`);
    console.log(`===============================`);

    //I had to use a table, because variable are locale, then i can't change it 
    var score = new Int32Array(2);
    score[0] = 0;
    score[1] = 0;

    init(score);

}

zeroTwoGame();