/**
 * Search by dichotomy of an element in an ordered table
 * Given a table containing firstnames, sorted alphabetically
 * We want to find the index of the cell in the table where the firstname is located, if it is there.
 * Give the algorithm of the procedure which searches, by dichotomy, the number of the first name.
 */

const fs = require(`fs`);
const readline = require(`readline`);
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
// This regex checks if the input is correct
const controlRegex = /^[a-zA-Z]+$/

/**
 * This recursive function cuts the table in 2 section.
 * Since its an ordered table, we can check if answer is greater or lower than the mid value.
 * Until we find a result (valid or not), we continue to divide the table by 2.
 * Since we overwrtite max or min bound by (mid+1) or (mid-1) the recursion must stop at worse to -1.
 * @param {*} table 
 * @param {*} answer 
 * @param {*} minBound 
 * @param {*} maxBound
 * @returns index of the word (or -1 if index does not exsit)
 */
function binarySearch(table, answer, minBound, maxBound) {
    let mid = Math.floor((maxBound + minBound) / 2);

    // Stop condition if no value is returned
    if (minBound > maxBound)
        return (-1);
    if (answer.toUpperCase() == table[mid].toUpperCase())
        return (mid);
    else if (answer.toUpperCase() < table[mid].toUpperCase())
        return (binarySearch(table, answer, minBound, mid - 1));
    else
        return (binarySearch(table, answer, mid + 1, maxBound));
}

/**
 * This function checks if the valus fits to the regex
 * @param {*} answer 
 * @param {*} sortedTable
 * @returns a boolean value
 */
function checkInput(answer) {
    if (answer.match(controlRegex)) {
        return (true);
    }
    else {
        console.log(`Bad input... Insert a firstname (letters only)`)
        return (false);
    }
}

/**
 * This function asks the user to input a firstname.
 * @param {*} sortedTable 
 */
function startGame(sortedTable) {
    rl.question(`\nPlease input a firstname : `, answer => {
        if (checkInput(answer)) {
            let minBound = 0;
            let maxBound = sortedTable.length - 1;
            let indexResult = binarySearch(sortedTable, answer, minBound, maxBound);
            if (indexResult < 0)
                console.log(`\n${answer} isn't in this list\n`);
            else
                console.log(`\n${sortedTable[indexResult]} is at the index ${indexResult}\n`);
            rl.close();
            process.exit();
        }
        else
            startGame(sortedTable, answer);
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
    //Title
    console.log(`\n=============================`);
    console.log(`### BINARY SEARCH PROGRAM ###`);
    console.log(`=============================`);

    // Store the content of the .txt in a table
    let stringTxt = fs.readFileSync(`Exercise0370.txt`);
    const tableTxt = stringTxt.toString().split("\r\n");

    // Sort the table
    const sortedTable = mergeSort(tableTxt);

    // Start game
    startGame(sortedTable);
}
main();