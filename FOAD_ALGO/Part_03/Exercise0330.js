/**
 * Given a character string ending with the character ". "
 * Creat a program that counts the number of occurrences of a given letter ("a" for example) in this chain.
 * If the character string only contains the character ". ", The message" THE CHAIN ​​IS EMPTY "will be displayed.
 * Suggest a test game with the following 3 cases:
 *      ▪ The sentence is empty
 *      ▪ The letter is not present
 *      ▪ The letter is present several times
 */

const readline = require(`readline`);
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

//This regex checks if the string has more than a letter.
const regex = /^([A-Z]{1})([a-zA-Z ,'\.]{117,})([a-z\.]{1}[?!\.]{1}$)$/;

function printResult(resultTab, answer) {
    console.log(`\nInput sentence : ${answer}`);
    console.log(`______________________________\n`);
    console.log('RESULTS : ');
    for (let i = 0; i < resultTab.length; i++) {
        console.log(`${String.fromCharCode(97 + i)} : ${resultTab[i]} time(s)`);
    }
    console.log(`______________________________\n`);
}

function generateResultTab() {
    let tab = new Array(26);
    for (let i = 0; i < tab.length; i++) {
        tab[i] = 0;
    }
    return (tab);
}

function generateAlphabetTab() {
    let alphabet = new Array(26);
    for (let i = 0; i < alphabet.length; i++) {
        alphabet[i] = String.fromCharCode(97 + i);
    }
    return (alphabet);
}

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
    console.log(`\n=================================`);
    console.log(`### FIND THE NUMBER OF LETTERS###`);
    console.log(`=================================`);
    console.log(`\nYou have to insert a text. There are 2 rules.`);
    console.log(`     - The text must be longer than 120 characters`);
    console.log(`     - The text must end with a dot (. / ? / !)`);
    console.log(`If nothing is inserted, the program will generate a text.`);

    asktext(string);
}

main();