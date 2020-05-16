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

/**
 * This function prints the result and closes the program 
 * @param {*} count 
 */
function printResult(count) {
    console.log(`\nIn your age list ${count} were younger than 20\n`);
    rl.close();
    process.exit();
}

/**
 * This function count the number of people younger than 20
 * @param {*} ageTable 
 */
function countYoung(ageTable) {
    let count = 0;
    for (let i = 1; i < ageTable.length; i++) {
        if (ageTable[i] < 20)
            count++;
    }
    return (count);
}

function storeValue(answer, ageTable) {
    ageTable[ageTable[0]] = answer;
    ageTable[0]++;
    if (ageTable[0] == 21) {
        printResult(countYoung(ageTable));
    }
}

function checkInput(answer, ageTable) {
    if (answer > 0 && answer < 120) {
        storeValue(answer, ageTable);
    }
    else if (answer >= 120) {
        console.log(`This is too old...`);
    }
    else {
        console.log(`Bad input...\n`);
    }
    askAge(ageTable);
}

function askAge(ageTable) {
    rl.question(`Please input an age : `, answer => {
        checkInput(answer, ageTable);
    });
}

function main() {
    console.log(`===============================`);
    console.log(`### Young people Program v1 ###`);
    console.log(`===============================`);

    //The tab[0] will be the iterator and tab[1 -20] the values
    let ageTable = new Array(21);
    ageTable[0] = 1;
    askAge(ageTable);
}

main();
