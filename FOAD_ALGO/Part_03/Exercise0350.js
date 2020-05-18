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
    input: process.stdin,
    output: process.stdout
});

/**
 * This regex is used to check the input.
 * Start by a letter or a number only. Accept spaces followed by a letter at least. End by a dot
 * If the only input is dot, works too.
 * Check rules below (main function) for more information.
 */
const regex = /(?:^[a-zA-Z0-9]{2,}((\s{1}[a-zA-Z0-9]+)+)?\.{1})|(?:^\.{1})$/;

/**
 * This function returns a formated string.
 * Spaces deletion with replace() string method
 * Dot deletion by extracting the substring str.length - 1.
 * 
 * @param {*} answer
 * @returns The formated string
 */
function formatString(answer){
    let formatedString = answer;

    formatedString = formatedString.replace(/\s/g, ""); // The g modifier means global (Every spaces in the string)
    formatedString = formatedString.substring(0, formatedString.length - 1);
    return (formatedString);
}

/**
 * This function returns a boolean.
 * True if answer is a palindrome, else returns false
 * @param {*} answer 
 */
function palindromeChecker(answer){
    let formatedString = formatString(answer);
    let i = 0;
    let j = formatedString.length;

    while (i < j){
        if (formatedString.charAt())
    }
    return (true);

}

function checkInput(answer){
    if (answer.match(regex)){
        if (answer.length == 1)
            console.log(`This is an empty string`);
        else{
            palindromeChecker(answer);
        }
    }
    else{
        console.log(`Bad input... Follow the rules!`);
        askSentence();
    }
}

/**
 * This function asks the user to insert a string. (rules explained before)
 */
function askSentence(){
    rl.question(`\nInsert a string : `, answer =>{
        checkInput(answer);
    });
}


function main() {
    //Title
    console.log(`\n==========================`);
    console.log(`### PALINDROME PROGRAM ###`);
    console.log(`==========================`);
    
    //Rules
    console.log(`You have to input a string. There are few rules :`)
    console.log(`   - Your input must end by a dot and only one dot`);
    console.log(`   - Your input must start by a letter or a number`);
    console.log(`   - Special chars are forbidden`);
    console.log(`   - No more than 1 space between words`);
    console.log(`   - Your first word must do at least 2 chars`);
    console.log(`   - You can't let a space before the end dot`);

    //Begin
    askSentence();
}

main();