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
    constructor(_isWord, _wordToFind) {
        // This boolean is used to check if we want a word or a letter for the checking function
        this.isWord = _isWord;
        this.wordToFind = _wordToFind;
        this.alreadyTried = ["a"];
    }

    printHiddenWord() {
        console.log(this.hiddenWord.join(``));
    }

    printWordToFind() {
        console.log(this.wordToFind.join(``));
    }
}

function checkPreviousTry(answer, hangmanObj) {
    console.log("TEST 1");
    for (let i = 0; i < hangmanObj.alreadyTried.length; i++) {
        console.log("TEST 2");
        if (answer.toUpperCase == hangmanObj.alreadyTried[i].toUpperCase){
            console.log("TEST 3");
            return (false);
        }
    }
    console.log("TEST 4");
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
        tab[i] = answer.charAt(i);
    }
    return (tab);
}

function checkInput(answer, hangmanObj) {
    if (hangmanObj.isWord) {
        if (answer.match(regexPlayer1)) {
            // Set the hangmanObj attributes
            hangmanObj.wordToFind = stringToTab(answer);
            hangmanObj.isWord = false;
            hangmanObj.hiddenWord = translateToHidden(stringToTab(answer));
            // Starting player 2 turn
            console.log(`\nPlayer 2, it's your turn.`);
            askInput(hangmanObj);
        }
        else {
            console.log(`Bad input... Follow the rules !\n`);
            askInput(hangmanObj);
        }
    }
    else {
        if (answer.match(regexPlayer2)) {
            if (checkPreviousTry(answer, hangmanObj)){

            }
            else{
                console.log("You already tried this letter, COME ON !!! ")
                askInput(hangmanObj);
            }
        }
        else {
            console.log(`Bad input... Follow the rules !\n`);
            askInput(hangmanObj);
        }
    }
}
function askInput(hangmanObj) {
    rl.question(`Please insert a ${(hangmanObj.isWord ? `word` : `letter`)} : `, answer => {
        checkInput(answer, hangmanObj);
    });
}

function startGame(hangmanObj) {
    console.log(`\nPlayer 1, it's your turn.`);
    askInput(hangmanObj);
}

// #####################################################################
// ######################### DISPLAY FUNCTIONS #########################
// #####################################################################

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
    const hangmanObj = new Hangman(true, [])
    displayTitle(`The hangman game program`);
    displayRules();
    startGame(hangmanObj);
}

main();