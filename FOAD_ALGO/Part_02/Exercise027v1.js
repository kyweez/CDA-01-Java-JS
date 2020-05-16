/**
* It is a question of counting all people of age strictly less than 20 years among a sample of 20 people. 
* The user is prompted to enter the 20 values.
* Describe the algorithm that displays the number of young people and code the solution. 
*/

const readline = require(`readline`);
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

fucntion storeValue(answer, ageTable){

}

function checkInput(answer, ageTable){
    if (answer > 0 && answer < 120){

    }
    else if (answer >= 120 ){
        console.log(`This is too old...`);
    }
    else{
        console.log(`Bad input...\n`);
    }
}

function askAge(ageTable){
    rl.question(`Please input an age : `, answer =>{
        checkInput(answer, ageTable);
    });
}

function main(){
    console.log(`============================`);
    console.log(`### Young people Program ###`);
    console.log(`============================`);

    //The tab[0] will be the iterator and tab[1 -20] the values
    let ageTable = new Array(21);

    askAge(ageTable);
}

main();
