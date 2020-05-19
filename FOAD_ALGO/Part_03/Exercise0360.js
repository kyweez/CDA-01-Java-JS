/**
 * The algorithm reads a word proposed by a first player.
 * This word has a minimum length of 5 characters (has to be checked).
 * The algorithm displays the word as following : All the letters except the first and the last are replaced by a dash.
 * A second player offers letters one by one.
 * Whenever the letter is in the word, the algorithm replaces the dashes that replaced that letter and redisplays the word. 
 * The second player is entitled to a maximum of 6 tries to find all the letters.
 */

const readline = require(`readline`);
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
const regexPlayer1 = /^[a-zA-Z]{5,12}$/
const regexPlayer2 = /^[a-zA-Z]{1}$/


function checkInput(answer, isWord) {
    let wordToFind;

    if (isWord) {
        if (answer.match(regexPlayer1)) {
            wordToFind = answer.toUpperCase();
            isWord = false;
            dipslayHiddenWord(wordToFind);
            askInput()
        }
        else {
            console.log(`Bad input... Follow the rules !`);
            askInput(isWord);
        }
    }
    else {
        if (answer.match(regexPlayer2)) {
            console.log(`Ca marche`);
        }
        else {
            console.log(`Bad input... Follow the rules !`);
            askInput(isWord);
        }
    }
}

function askInput(isWord) {
    rl.question(`Please insert a ${(isWord ? `word` : `letter`)} : `, answer => {
        checkInput(answer, isWord);
    });
}

function startGame() {
    let isWord; // This boolean is used to check if we want a word or a letter for the checking function
    console.log(`\nPlayer 1, it's your turn.`);
    isWord = true;
    askInput(isWord);
}

// #####################################################################
// ######################### DISPLAY FUNCTIONS #########################
// #####################################################################

function dipslayHiddenWord(wordToFind) {
    let hiddenWord = wordToFind;
    for (let i = 1; i < hiddenWord.length - 1; i++) {
        hiddenWord = hiddenWord.replace(hiddenWord.charAt(i), `▪`);
    }
    console.log(hiddenWord);
}

function player2Rules(numberOfTry) {
    console.log(`___________________________________________________`)
    console.log(`\nPlayer 2\n`)
    console.log(`1. Give a letter you dind't use before`);
    console.log(`2. Do not use special characters, numbers or spaces`);
    console.log(`3. Word is case insensitive`);
    console.log(`4. You have ${numberOfTry} tries left`);
}

function player1Rules() {
    console.log(`___________________________________________________`)
    console.log(`\nPlayer 1\n`)
    console.log(`1. Insert a word between 5 and 12 chararcters`);
    console.log(`2. Do not use special characters, numbers or spaces`);
    console.log(`3. Word is case insensitive`);
    console.log(`4. Insert a real word...`);
}

function displayRules() {
    console.log(`\nFollow strictly the rules! Here are the rules :`);
    player1Rules();
    player2Rules(6);
    console.log(`___________________________________________________`)
}

/**
 * This function formats a title display.
 * @param {*} title 
 */
function displayTitle(title) {
    let stringTop;
    let stringBot;
    let stringTitle;

    stringTitle = `### ${title.toUpperCase()} ###`;
    stringTop = function () {
        let str = `\n`;
        for (let i = 0; i < stringTitle.length; i++) {
            str += `=`;
        }
        return (str);
    }
    stringBot = stringTop().substring(1);

    // Display 
    console.log(stringTop());
    console.log(stringTitle);
    console.log(stringBot);
}

// #################################################################
// ######################### MAIN FUNCTION #########################
// #################################################################

function main() {
    displayTitle(`The hangman game program`);
    displayRules();
    startGame();
}

main();