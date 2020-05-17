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
const regexLetter = /^[a-zA-Z]{1}$/;

/**
 * This function prinnts the result.
 * @param {*} answer 
 * @param {*} stringTable 
 */
function printResult(answer, stringTable){
    let count;
    console.log(`Results with the lette "${answer}":\n`);
    for (let i=0; i<stringTable.length; i++){
        count = 0;
        if (stringTable[i].length == 1)
            console.log(`String ${i} is empty`);
        else{
            for (let j=0; j<stringTable[i].length; j++){
                if (stringTable[i].charAt(j) == answer)
                    count++;
            }
            if (count == 0)
                console.log(`String ${i} doesn't contain the letter ${answer}`);
            else
                console.log(`String ${i} contains ${count} time(s) the letter ${answer}`)
        }
    }
    console.log(`________________________________________________________________\n`);
    rl.close();
    process.exit();
}

/**
 * This function [prints each given strings]
 * @param {*} stringTable 
 */
function printStrings(stringTable){
    console.log(`________________________________________________________________\n`);
    console.log(`Given strings :\n`);
    for (let i = 0; i < stringTable.length; i++){
        console.log(`String ${i+1} : ${stringTable[i]}`);
    }
    console.log(`________________________________________________________________\n`);

}

/**
 * This function use a regex to check if the user input a single letter
 * @param {*} answer 
 * @param {*} stringTable 
 */
function checkInput(answer, stringTable){
    if (answer.match(regexLetter)){
        printStrings(stringTable);
        printResult(answer, stringTable);
    }
    else{
        console.log(`Bad input...\n`);
        askLetter(stringTable);
    }
}

/**
 * This function asks the user to input a letter he wants to find in given strings
 * @param {*} stringTable 
 */
function askLetter(stringTable){
    rl.question(`\nPlease insert a letter you want to find (case sensitive): `, answer => {
        checkInput(answer, stringTable);
    });
}

function main() {
    console.log(`\n======================`);
    console.log(`### FIND A LETTER  ###`);
    console.log(`======================`);
    let stringTable = new Array(3);
    stringTable[0] = ".";
    stringTable[1] = "This is a test! And this test should contain 5 i.";
    stringTable[2] = "ABCDEFGHIJKLOMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    askLetter(stringTable);
}

main();