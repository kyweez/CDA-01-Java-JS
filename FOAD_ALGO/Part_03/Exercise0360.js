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
// This regex checks if the player 1 inserted a valid word
const regexPlayer1 = /^[a-zA-Z]{5,12}$/
// This regex checks if the player 2 inserted a valid letter
const regexPlayer2 = /^[a-zA-Z]{1}$/

// #####################################################################
// ######################### CLASS DECLARATION #########################
// #####################################################################

class Hangman {
    constructor(_isWord, _wordToFind, _numberOfTry) {
        // This boolean is used to check if we want a word or a letter for the checking function
        this.isWord = _isWord;
        this.wordToFind = _wordToFind;
        this.alreadyTried = [];
        this.numberOfTry = _numberOfTry;
        this.gameOver = false;
    }
}

// #####################################################################
// ############################# FUNCTIONS #############################
// #####################################################################

/**
 * This function tells to the player 2 he failed finding a correct letter.
 * If the number of tries equals 0, the game is over
 * Else, the player 2 can try a new letter
 * @param {*} answer 
 * @param {*} hangmanObj 
 */
function failTry(answer, hangmanObj) {
    console.log(`The letter ${answer.toUpperCase()} is not in the hidden letters`);
    hangmanObj.numberOfTry--;
    if (hangmanObj.numberOfTry == 0) {
        displayHangman(hangmanObj);
        console.log(`\x1b[1mYou lost, shame on you !\n\x1b[0m`);
        console.log(`The word was ${hangmanObj.wordToFind.join("")}\n`);
        rl.close();
        process.exit();
    }
    else {
        displayHangman(hangmanObj);
        console.log(`You have ${hangmanObj.numberOfTry} tries left...\n`);
        askInput(hangmanObj);
    }
}

/**
 * This function tells to the player 2 he found a good letter.
 * Then it inserts the letter in the hidden word.
 * If the full word is found, the game is over.
 * @param {*} answer 
 * @param {*} hangmanObj 
 */
function succeedTry(answer, hangmanObj) {
    insertGoodLetter(answer, hangmanObj);
    if (hangmanObj.gameOver) {
        console.log(`\nYou won, GG !!!`);
        rl.close();
        process.exit();
    }
    else {
        printHiddenWord(hangmanObj);
        askInput(hangmanObj)
    }
}

/**
 * This function inserts the good letter in the hiddenWord.
 * It also tests if there is still hidden char (boolean)
 * @param {*} answer 
 * @param {*} hangmanObj 
 */
function insertGoodLetter(answer, hangmanObj) {
    hangmanObj.gameOver = true;
    for (let i = 0; i < hangmanObj.wordToFind.length; i++) {
        if (answer.toUpperCase() == hangmanObj.wordToFind[i].toUpperCase())
            hangmanObj.hiddenWord[i] = answer.toUpperCase();
        if (hangmanObj.hiddenWord[i].toUpperCase() != hangmanObj.wordToFind[i].toUpperCase())
            hangmanObj.gameOver = false;
    }
}

/**
 * This function checks if the input letter is in the word to find.
 * @param {*} answer 
 * @param {*} hangmanObj
 * @returns true or false
 */
function isGoodLetter(answer, hangmanObj) {
    for (let i = 1; i < hangmanObj.wordToFind.length - 1; i++) {
        if (answer.toUpperCase() == hangmanObj.wordToFind[i].toUpperCase())
            return (true);
    }
    return (false);
}

/**
 * This function checks if the letter has already been tried.
 * @param {*} answer 
 * @param {*} hangmanObj
 * @returns true or false
 */
function checkPreviousTry(answer, hangmanObj) {
    for (let i = 0; i < hangmanObj.alreadyTried.length; i++) {
        if (answer.toUpperCase() == hangmanObj.alreadyTried[i].toUpperCase()) {
            console.log("You already tried this letter, early Alzheimer ?\n")
            return (false);
        }
    }
    return (true);
}

/**
 * This function returns a chars tab with hidden chars (used to set hangmanObj.hiddenWord)
 * @param {*} wordToFind
 * @returns hiddenWord (tab)
 */
function translateToHidden(wordToFind) {
    let hiddenWord = wordToFind;
    for (let i = 1; i < hiddenWord.length - 1; i++) {
        hiddenWord[i] = `▪`;
    }
    return (hiddenWord);
}

/**
 * This function returns a chars tab with letter of @answer.
 * @param {*} answer
 * 
 */
function stringToTab(answer) {
    let tab = [];
    for (let i = 0; i < answer.length; i++) {
        tab[i] = answer.charAt(i).toUpperCase();
    }
    return (tab);
}

/**
 * This function lauches the player 2 game.
 * @param {*} hangmanObj 
 */
function startPlayerTwo(hangmanObj) {
    // Starting player 2 turn
    console.log(`\n\x1b[44mPlayer 2, it's your turn.\n\x1b[0m`);
    printHiddenWord(hangmanObj);
    askInput(hangmanObj);
}

/**
 * This fucntion sets differents attribute of the hangman object
 * @param {*} answer 
 * @param {*} hangmanObj 
 */
function setAttributes(answer, hangmanObj) {
    // Set the hangmanObj attributes
    hangmanObj.wordToFind = stringToTab(answer);
    hangmanObj.isWord = false;
    hangmanObj.hiddenWord = translateToHidden(stringToTab(answer));
}

/**
 * This function checks if the input is correct.
 * It can check both word (player 1) or letter (player 2) depending of boolean value of isWord.
 * It executes actions depending of the checking result
 * @param {*} answer 
 * @param {*} hangmanObj 
 */
function checkInput(answer, hangmanObj) {
    if (hangmanObj.isWord) {
        if (answer.match(regexPlayer1)) {
            setAttributes(answer, hangmanObj);
            startPlayerTwo(hangmanObj);
        }
        else {
            console.log(`Bad input... Follow the rules !\n`);
            askInput(hangmanObj);
        }
    }
    else {
        if (answer.match(regexPlayer2)) {
            if (!checkPreviousTry(answer, hangmanObj))
                askInput(hangmanObj);
            else {
                hangmanObj.alreadyTried.push(answer);
                if (isGoodLetter(answer, hangmanObj))
                    succeedTry(answer, hangmanObj);
                else
                    failTry(answer, hangmanObj);
                askInput(hangmanObj);
            }
        }
        else {
            console.log(`Bad input... Follow the rules !\n`);
            askInput(hangmanObj);
        }
    }
}

/**
 * Asks the user to prompt. The display is adaptative to the boolean value isWord
 * @param {*} hangmanObj 
 */
function askInput(hangmanObj) {
    rl.question(`\x1b[35mPlease insert a ${(hangmanObj.isWord ? `word` : `letter`)} : \x1b[0m`, answer => {
        checkInput(answer, hangmanObj);
    });
}

/**
 * This function launch the player 1 game.
 * @param {*} hangmanObj 
 */
function startGame(hangmanObj) {
    console.log(`\n\x1b[41mPlayer 1, it's your turn.\n\x1b[0m`);
    askInput(hangmanObj);
}

// #####################################################################
// ######################### DISPLAY FUNCTIONS #########################
// #####################################################################


/**
 * At start, I put it in the class, however it brought some weird behaviors
 * @param {*} hangmanObj 
 */
function printHiddenWord(hangmanObj) {
    console.log(`${hangmanObj.hiddenWord.join("")}\n`);
}

function player2Rules(numberOfTry) {
    console.log(`___________________________________________________`)
    console.log(`\n\x1B[31m\x1b[31mPlayer 2\x1b[32m\n`)
    console.log(`1. Give a letter you dind't use before`);
    console.log(`2. Do not use special characters, numbers or spaces`);
    console.log(`3. Word is case insensitive`);
    console.log(`4. You have ${numberOfTry} tries left\x1B[0m`);
}

function player1Rules() {
    console.log(`___________________________________________________`)
    console.log(`\n\x1B[31mPlayer 1\x1b[32m\n`)
    console.log(`1. Insert a word between 5 and 12 chararcters`);
    console.log(`2. Do not use special characters, numbers or spaces`);
    console.log(`3. Word is case insensitive`);
    console.log(`4. Insert a real word...\x1B[0m`);
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
    const hangmanObj = new Hangman(true, [], 6)
    displayTitle(`The hangman game program`);
    displayRules();
    startGame(hangmanObj);
}

main();

// #################################################################
// ######################## HANGMAN DISPLAY ########################
// #################################################################

function displayHangman(hangmanObj) {

    if (hangmanObj.numberOfTry == 5) {
        console.log(` \n▄▄▄▄▄▄▄▄▄▄▄▄`)
        console.log(` ▐`);
        console.log(` ▐`);
        console.log(` ▐`);
        console.log(` ▐`);
        console.log(` ▐`);
        console.log(` ▐`);
        console.log(` ▐`);
        console.log(`█████████████████\n`)
    }
    else if (hangmanObj.numberOfTry == 4) {
        console.log(` \n▄▄▄▄▄▄▄▄▄▄▄▄`)
        console.log(` ▐  \x1b[1m/     |\x1b[0m`);
        console.log(` ▐ \x1b[1m/      |\x1b[0m`);
        console.log(` ▐`);
        console.log(` ▐`);
        console.log(` ▐`);
        console.log(` ▐`);
        console.log(` ▐`);
        console.log(`█████████████████\n`)
    }
    else if (hangmanObj.numberOfTry == 3) {
        console.log(` \n▄▄▄▄▄▄▄▄▄▄▄▄`)
        console.log(` ▐  \x1b[1m/     |\x1b[0m`);
        console.log(` ▐ \x1b[1m/      |\x1b[0m`);
        console.log(` ▐        \x1b[1mỌ\x1b[0m`);
        console.log(` ▐`);
        console.log(` ▐`);
        console.log(` ▐`);
        console.log(` ▐`);
        console.log(`█████████████████\n`)
    }
    else if (hangmanObj.numberOfTry == 2) {
        console.log(` \n▄▄▄▄▄▄▄▄▄▄▄▄`)
        console.log(` ▐  \x1b[1m/     |\x1b[0m`);
        console.log(` ▐ \x1b[1m/      |\x1b[0m`);
        console.log(` ▐        \x1b[1mỌ\x1b[0m`);
        console.log(` ▐       \x1b[1m/|\\\x1b[0m`);
        console.log(` ▐`);
        console.log(` ▐`);
        console.log(` ▐`);
        console.log(`█████████████████\n`)
    }
    else if (hangmanObj.numberOfTry == 1) {
        console.log(` \n▄▄▄▄▄▄▄▄▄▄▄▄`)
        console.log(` ▐  \x1b[1m/     |\x1b[0m`);
        console.log(` ▐ \x1b[1m/      |\x1b[0m`);
        console.log(` ▐        \x1b[1mỌ\x1b[0m`);
        console.log(` ▐       \x1b[1m/|\\\x1b[0m`);
        console.log(` ▐        \x1b[1m|\x1b[0m`);
        console.log(` ▐`);
        console.log(` ▐`);
        console.log(`█████████████████\n`)
    }
    else {
        console.log(` \x1b[31m\n▄▄▄▄▄▄▄▄▄▄▄▄`)
        console.log(` ▐  \x1b[1m/     |`);
        console.log(` ▐ \x1b[1m/      |`);
        console.log(` ▐        \x1b[1mỌ`);
        console.log(` ▐       \x1b[1m/|\\`);
        console.log(` ▐        \x1b[1m|`);
        console.log(` ▐       \x1b[1m/ \\`);
        console.log(` ▐`);
        console.log(`█████████████████\n`)
    }
}