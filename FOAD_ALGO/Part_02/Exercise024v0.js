// The readline module provides an interface for reading data from a Readable stream (such as process.stdin) one line at a time.
const readline = require('readline');

/**
 * query <string> A statement or query to write to output, prepended to the prompt.
 * callback <Function> A callback function that is invoked with the user's input in response to the query.
 * 
 * The rl.question() method displays the query by writing it to the output.
 * It waits for user input to be provided on input, then invokes the callback function passing the provided input as the first argument.
 * When called, rl.question() will resume the input stream if it has been paused.
 */
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

/**
 * This function calculates the number of shop you can visit with the amount input
 * @param {*} answer 
 */
function shopsNumber (answer){
    let money = Number(answer);
    let count = 0;
    console.log(`\nDetails :\n¯¯¯¯¯¯¯¯¯`);
    while (money > 1){
        money -= (money/2 +1);
        //We round to avoid float in the display. But we keep the calcul as asked
        console.log(`After the visit ${count} Barnabe has ${Math.round(money)} euros left`);
        count ++;
    }
    console.log (`\nUser had ${answer} euros and visited ${count} shops\n`);
    rl.close();
    process.exit();
}

/**
 * This function asks the user to input an amount 
 */
function askNumber(){
	rl.question(`Barnabe has this starting amount : `, (answer) => {
		shopsNumber(answer);
	})
}

function barnabeShopping(){
	console.log(`================================`);
	console.log(`### Barnabe shopping program ###`);
	console.log(`================================`);

	askNumber();
}

barnabeShopping();