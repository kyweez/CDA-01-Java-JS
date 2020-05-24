const readline = require(`readline`);
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// This regex checks if the player 1 inserted a valid word
const regexPlayer1 = /^[a-zA-Z]{5,12}$/

const fs = require(`fs`);



function merge(firstTable, secondTable) {
    let sortedTable = [];
    let i = 0;
    let j = 0;
    while (i < firstTable.length && j < secondTable.length) {
        if (firstTable[i] < secondTable[i])
            sortedTable.push(firstTable[i++]);
        else
            sortedTable.push(secondTable[j++]);
    }
    // At this point either firstTable or second table has been browsed
    while (i < firstTable.length) {
        sortedTable.push(firstTable[i++]);
    }
    while (j < secondTable.length) {
        sortedTable.push(firstTable[i++]);
    }
    return (sortedTable);
}

function mergeSort(tableToSort) {
    let tableLength;
    let firstTable;
    let secondTable;

    tableLength = tableToSort.length;
    if (tableLength == 1)
        return (tableToSort);
    firstTable = tableToSort.slice(0, tableLength / 2);
    secondTable = tableToSort.slice(tableLength / 2)

    firstTable = mergeSort(firstTable);
    secondTable = mergeSort(secondTable);
    return (merge(firstTable, secondTable));
}

function main() {
    // let stringTxt = fs.readFileSync(`Exercise0370.txt`); 

    // const tableTxt = stringTxt.toString().split("\r\n"); 
    // console.log(tableTxt);
    // const sortedTable = sortTable(tableTxt);
    let tab = [5, 1, 9, 2];
    console.log(tab.join(" "));
    console.log(mergeSort(tab));
    process.exit(0);
    // console.log(fusionSort(tab));
}
main();