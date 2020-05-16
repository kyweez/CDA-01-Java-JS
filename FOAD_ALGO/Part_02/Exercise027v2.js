/**
* It is a question of counting all people of age strictly less than 20 years among a sample of 20 people. 
* The user is prompted to enter the 20 values.
* Describe the algorithm that displays the number of young people and code the solution. 
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
 * This function prints the result and closes the program 
 * @param {*} count 
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
 * This function count the number of people younger than 20
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