/**
 * A palindrome is a character string that can be read identically from right to left, and left to right.
 * 
 * For example:
 * AA. 38783. LAVAL. LAVAL WAS IN LAVAL. AND THE NAVY WILL COME TO MALTA
 * 
 * Given a string terminated by a dot.
 * Write the algorithm of a program allowing to affirm if this sentence is or not a palindrome.
 * If the string contains only the character '.' => The message 'THE STRING ​​IS EMPTY' will be displayed.
 * 
 * Suggest a test game with the following 3 cases:
 *      ▪ the sentence is empty
 *      ▪ the character string is not a palindrome
 *      ▪ the character string is a palindrome
 */

/**
 * Readline module instanciation
 */
const readline = require(`readline`);
const rl = readline.createInterface({
    input: process.input(),
    output: process.stdout()
});

/**
 * This regex is used to check the input.
 * Start by a letter or a number. Accept spaces. End by a dot
 */
const regex = /(^[a-zA-Z0-9]{2,})([a-zA-Z0-9\s]+)(\.{1}$)/;


function askSentence(){
    rl.question(`Insert a string : `, answer =>{
        fonction
    });
}


function main() {
    console.log(`\n==========================`);
    console.log(`### PALINDROME PROGRAM ###`);
    console.log(`==========================`);

    askSentence();
}

main();