/**
 * Given an array of numbers sorted in ascending order.
 * Find if a given number N is among the elements.
 * If yes, indicate the value of the corresponding index. 
 * Otherwise, indicate "Not found".
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
 * This function convert a table to a string (easier for display)
 * @param {*} table 
 */
function tableToString(table) {
    let stringTable = "";
    for (let i = 0; i < table.length; i++) {
        stringTable += table[i] + " ";
    }
    return (stringTable);
}

/**
 * This function returns the number of number iterations in the table
 * @param {*} answer 
 * @param {*} table 
 */
function iterationNumber(answer, table) {
    let count = 0;
    for (let i = 0; i < table.length; i++) {
        if (answer == table[i])
            count++;
    }
    return (count);
}

/**
 * This function prints the result of the game
 * It calls a function to print the sorted table then an iteration checking
 * @param {*} answer 
 * @param {*} table 
 */
function printResult(answer, table) {
    let count = iterationNumber(answer, table);

    console.log(`\nRandom sorted table : ${tableToString(table)}\n`);
    if (count == 0) {
        console.log(`You lost, ${answer} isn't in this list\n`);
    }
    else
        console.log(`You won ! ${answer} appears ${count} time(s) in this list\n`)
    rl.close();
    process.exit();
}

/**
 * This function checks the user input. 
 * If it's bad, calls back the askNumber function.
 * Else calls printResult function
 * @param {*} answer 
 * @param {*} table 
 */
function checkInput(answer, table) {
    if (answer >= 0 && answer <= 20) {
        printResult(answer, table);
    }
    else {
        console.log(`Bad input...`);
        askNumber(table);
    }
}

/**
 * This function asks the user to input a number bettween 0 and 20
 * Then it checks if the input is valid
 * @param {*} table 
 */
function askNumber(table) {
    rl.question(`\nEnter a number a number between 0 and 20 : `, answer => {
        checkInput(answer, table);
    });
}

/**
 * This function sorts a table of integers
 * @param {*} table
 * @returns a sorted table
 */
function sort(table) {
    let i;
    let j;
    let temp;
    let maxBound = table.length;

    while (maxBound > 1) {
        sorted = true;
        i = 0;
        j = 1;
        while (j < maxBound) {
            if (table[i] > table[j]) {
                temp = table[i];
                table[i] = table[j];
                table[j] = temp;
            }
            i++;
            j++;
        }
        maxBound--;
    }
    return (table);
}

/**
 * This function generate a 20 cells array of random generated integers
 */
function generateTable() {
    let table = new Int32Array(20);

    for (let i = 0; i < table.length; i++) {
        table[i] = Math.round(Math.random() * 20);
    }
    return (table);
}

function main() {
    console.log(`\n=======================`);
    console.log(`### FIND THE NUMBER ###`);
    console.log(`=======================`);
    let table = generateTable();
    askNumber(sort(table));
}

main();