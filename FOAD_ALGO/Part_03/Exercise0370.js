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
    let tab = [1,2,0,0,3,2,3,1,2,3,1,2,312,3,1,2,31,5,63,2,64,5,6,8,4,3,6,23,4,52,3,67,2,3,4,5,2,35,4,1,2,35,2,465,2];
    console.log(tab.join(" "));
    console.log(mergeSort(tab).join(" "));
    process.exit(0);
    // console.log(fusionSort(tab));
}
main();