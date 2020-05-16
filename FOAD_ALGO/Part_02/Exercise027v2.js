/**
 * Same algo than 2.7.1 but changing some rules:
 * If everyone is under 20, display "ALL PEOPLE ARE UNDER 20"
 * If no one is younger than 20, post "ALL PEOPLE ARE MORE THAN 20 YEARS"
 * Otherwise, display the number of people for each category ("- from 20, + from 20, = to 20).
 */

/**
 * Instanciating readline module
 */
const readline = require(`readline`);
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function printTab(ageTable){
    let stringTab = "";
    for (let i = 1; i<ageTable.length; i++){
        stringTab += ageTable[i] + " ";
    }
    return (stringTab);
}

/**
 * This function prints results in function of type of people.
 * This closes the program after
 * @param {*} ageTable 
 * @param {*} countYoung 
 * @param {*} countMiddleAge 
 * @param {*} countOld 
 */
function printResult(ageTable, countYoung, countMiddleAge, countOld) {
    console.log(`________________________________________________________`);
    console.log(`\nYou inputed the following values :\n${printTab(ageTable)}\n`);
    if (countYoung == 20 || countOld == 20)
        console.log(`EVERYONE IS ${countYoung == 20 ?'YOUNG':'OLD'}`);
    else {
        console.log(`People younger than 20 : ${countYoung}`);
        console.log(`People who are 20      : ${countMiddleAge}`);
        console.log(`People older than 20   : ${countOld}`);
    }
    console.log(`________________________________________________________\n`);
    rl.close();
    process.exit();
}

/**
 * This function count the number of people younger than 20, older than 20 and equals to 20
 * @param {*} ageTable
 */
function countPeople(ageTable) {
    let countYoung = 0;
    let countOld = 0
    let countMiddleAge = 0
    for (let i = 1; i < ageTable.length; i++) {
        if (ageTable[i] < 20)
            countYoung++;
        else if (ageTable[i] > 20)
            countOld++;
        else
            countMiddleAge++;
    }
    printResult (ageTable, countYoung, countMiddleAge, countOld);
}

/**
 * This function store the valid value in the table 
 * @param {*} answer (input)
 * @param {*} ageTable 
 */
function storeValue(answer, ageTable) {
    ageTable[ageTable[0]] = answer;
    ageTable[0]++;
    if (ageTable[0] == 21)
        countPeople(ageTable);
}

/**
 * This function check if the input is correct
 * Call back the askAge function if the value is incorrect (without doing anything else)
 * @param {*} answer 
 * @param {*} ageTable 
 */
function checkInput(answer, ageTable) {
    if (answer > 0 && answer < 120) {
        storeValue(answer, ageTable);
    }
    else if (answer >= 120) {
        console.log(`This is too old...\n`);
    }
    else {
        console.log(`Bad input...\n`);
    }
    askAge(ageTable);
}

/**
 * Ask an age to the user
 * @param {*} ageTable 
 */
function askAge(ageTable) {
    rl.question(`Please input an age : `, answer => {
        checkInput(answer, ageTable);
    });
}

function main() {
    console.log(`===============================`);
    console.log(`### Young people Program v2 ###`);
    console.log(`===============================`);

    //The tab[0] will be the iterator and tab[1 -20] the values
    let ageTable = new Array(21);
    ageTable[0] = 1;
    askAge(ageTable);
}

main();