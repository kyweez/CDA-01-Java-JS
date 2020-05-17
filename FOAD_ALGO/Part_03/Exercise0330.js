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
 * This function asks the user to input a letter he wants to find in given strings
 * @param {*} stringTable 
 */
function askLetter(stringTable){
    rl.question(`\nPlease insert a letter you want to find (case sensitive): `, answer => {
        checkInput(answer, stringTable);
    });
}

function main() {


}

main();