/**
 * We will designate by a1, a2, ..., aN the elements of an array to be sorted in ascending order.
 * We start by looking for the index of the smallest of the elements, aj this index.
 * We then swap the values ​​of a1 and aj.
 * We then seek the index of the smallest of the elements a2, a3, ..., an and we permute with a2, etc.
 */

/**
 * Readline module instanciation
 */
const readline = require(`readline`);
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

//This regex checks if the string has the good format.
const regex = /^[0-9]+((\s{1}[0-9]+)+)$/;

function checkInput(answer) {

}

function askNumber() {
    rl.question(`\nPlease insert as many numbers as you want separated by spaces : \n`, answer => {
        checkInput(answer);
    });
}

function main() {
    console.log(`\n======================`);
    console.log(`### SELECTION SORT ###`);
    console.log(`======================`);

    askNumber();
}

main();