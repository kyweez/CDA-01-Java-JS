/**
 * Read a text of at least 120 characters (has to be checked).
 * Count and display the number of occurrences of each of the letters of the alphabet.
 */

/**
 * Readline module instanciation
 */
const readline = require(`readline`);
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

//This regex checks if the string has more than a letter.
const regex = /^([A-Z]{1})([a-zA-Z ?!,'\.]{117,})([a-z\.]{1}[?!\.]{1}$)$/;

/**
 * This function prints the final result
 * @param {*} resultTab (result table)
 * @param {*} answer (input)
 */
function printResult(resultTab, answer) {
    console.log(`\nInput sentence : ${answer}`);
    console.log(`______________________________\n`);
    console.log('RESULTS : ');
    for (let i = 0; i < resultTab.length; i++) {
        //This method is used to have the ASCII value of a letter
        console.log(`${String.fromCharCode(97 + i)} : ${resultTab[i]} time(s)`);
    }
    console.log(`______________________________\n`);
}

/**
 * This function generates an empty result table initialized to 0
 */
function generateResultTab() {
    let tab = new Array(26);
    for (let i = 0; i < tab.length; i++) {
        tab[i] = 0;
    }
    return (tab);
}

/**
 * This function generates an alphabet table
 */
function generateAlphabetTab() {
    let alphabet = new Array(26);
    for (let i = 0; i < alphabet.length; i++) {
        alphabet[i] = String.fromCharCode(97 + i);
    }
    return (alphabet);
}

/**
 * This function checks every letters of the sentence and fill the result table
 * @param {*} answer 
 */
function checkLetters(answer) {
    let i = 0;
    let j;
    let found;
    let alphabet = generateAlphabetTab();
    let result = generateResultTab();

    while (i < answer.length) {
        j = 0;
        found = false;
        while (!found && j < alphabet.length) {
            if (answer.charAt(i).toLowerCase() == alphabet[j]) {
                found = true;
                result[j]++;
            }
            j++;
        }
        i++;
    }
    return (result);
}

/**
 * This function checks if the input match to the Regex
 * If nothing as been input, the program uses its sentence (Lorem)
 * @param {*} answer 
 * @param {*} string 
 */
function checkInput(answer, string) {
    if (!answer.match(regex) && answer != "") {
        console.log(`Bad input. Try again and follow the rules...`);
        asktext(string);
    }
    else {
        if (answer == "")
            answer = string;
        printResult(checkLetters(answer), answer);
        rl.close();
        process.exit();
    }
}

function asktext(string) {
    rl.question(`\nPlease insert your text : `, answer => {
        checkInput(answer, string);
    });
}

function main() {
    let string = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas porttitor nulla id dui tempor pretium. Nunc tincidunt.";
    console.log(`\n==================================`);
    console.log(`### FIND THE NUMBER OF LETTERS ###`);
    console.log(`==================================`);
    console.log(`\nYou have to insert a text. There are 4 rules.`);
    console.log(`     - The text must be longer than 120 characters`);
    console.log(`     - The text must start with an uppercase letter`);
    console.log(`     - The text can't contain special chars except , / ' / . / ? / !`);
    console.log(`     - The text must end with a dot (. / ? / !)`);
    console.log(`If nothing is inserted, the program will generate a text.`);

    asktext(string);
}

main();