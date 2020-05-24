const readline = require(`readline`);
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// This regex checks if the player 1 inserted a valid word
const controlRegex = /^[a-zA-Z]+$/

const fs = require(`fs`);

function

//
function checkInput(answer, sortedTable){
    if (answer.match(controlRegex)){
        return (true);
    }
    else{
        console.log(`Bad input... Insert a firstname (letters only)`)
        return (false);
    }
}

/**
 * This function asks the user to input a firstname.
 * @param {*} sortedTable 
 */
function startGame(sortedTable) {
    rl.question(`Please input a firstname : `, answer => {
        if (checkInput(answer, sortedTable)){
            let result = binarySearch 
        }
        else{
            console.log(`Bad input`);
            startGame(sortedTable);
        }
    })
}

/**
 * This function takes 2 arguments. Each argument is a table.
 * It will fill a new table with sorted values from the 2 tables.
 * @param {*} firstTable 
 * @param {*} secondTable
 * @returns the sorted table
 */
function merge(firstTable, secondTable) {
    let sortedTable = [];
    let i = 0;
    let j = 0;
    while (i < firstTable.length && j < secondTable.length) {
        if (firstTable[i] < secondTable[j]) {
            sortedTable.push(firstTable[i++]);
        }
        else {
            sortedTable.push(secondTable[j++]);
        }
    }
    // At this point either firstTable or second table has been browsed
    while (i < firstTable.length) {
        sortedTable.push(firstTable[i++]);
    }
    while (j < secondTable.length) {
        sortedTable.push(secondTable[j++]);
    }
    return (sortedTable);
}
/**
 * This recursive function will split the table given as an argument in 2 parts
 * The first part is stored in a table. The second one is stored on a second table.
 * Eachj table is given as an argument on the recursive function until we have 2 tables of 1 case.
 * Each previous splitted table is stacked on a LIFO heap. 
 * Then the merge function is called for each element of the stack.
 * @param {*} tableToSort
 * @returns A sorted table
 */
function mergeSort(tableToSort) {
    let tableLength;
    let firstTable;
    let secondTable;

    tableLength = tableToSort.length;
    // This is the stopping condition
    if (tableLength == 1)
        return (tableToSort);
    // First split
    firstTable = tableToSort.slice(0, tableLength / 2);
    secondTable = tableToSort.slice(tableLength / 2)
    // ### Recursive call ###
    // Each table will be given the returned table when tableLength == 1
    firstTable = mergeSort(firstTable);
    secondTable = mergeSort(secondTable);
    return (merge(firstTable, secondTable));
}

function main() {
    let stringTxt = fs.readFileSync(`Exercise0370.txt`);
    const tableTxt = stringTxt.toString().split("\r\n");
    const sortedTable = mergeSort(tableTxt);
    startGame(sortedTable);
}
main();