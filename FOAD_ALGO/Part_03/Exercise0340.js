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

function printTable(table) {
    let tableString = "";
    for (let i = 0; i < table.length; i++) {
        tableString += table[i] + " ";
    }
    console.log(tableString);
}

function printResult(sortedTab) {
    console.log(`--------------------`);
    printTable(sortedTab);
    console.log(`--------------------`);


}

function sortTable(table) {
    let minBound = 0;
    let index;
    let temp;
    while (minBound < table.length) {
        index = minBound;
        for (let i = minBound+1; i < table.length; i++) {
            if (table[i] < table[index])
                index = i;
        }
        temp = table[minBound];
        table[minBound] = table[index];
        table[index] = temp;
        minBound++;
    }
    return (table)
}

function initNumberTable(answer) {
    let tableString = answer.split(" ");
    let tableNumber = new Int32Array(tableString.length);
    for (i=0; i<tableNumber.length;i++){
        tableNumber[i] = Number(tableString[i]);
    }
    return (tableNumber);
}

function checkInput(answer) {
    if (answer.match(regex)) {
        let table = initNumberTable(answer);
        printResult(sortTable(table));
        rl.close();
        process.exit();
    }
    else {
        console.log(`Bad input...\n`);
        askNumbers();
    }
}

function askNumbers() {
    rl.question(`\nInsert numbers separated by spaces (Warning - last character has to be a number) : \n`, answer => {
        checkInput(answer);
    });
}

function main() {
    console.log(`\n======================`);
    console.log(`### SELECTION SORT ###`);
    console.log(`======================`);

    askNumbers();
}

main();