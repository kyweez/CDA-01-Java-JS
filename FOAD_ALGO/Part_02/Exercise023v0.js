/**
 * The readline module provides an interface for reading data from a Readable stream (such as process.stdin) one line at a time.
 */
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
 * This function tests if the number to find is equal/more/low than the input one
 * @param {*} randomNumber 
 * @param {*} answer (input)
 * @param {*} count (count = number of tries)
 */
function test(randomNumber, answer, count){
	count = count + 1;
	if (answer > randomNumber)
		console.log(`It's less, try again...\n`);
	else if(answer < randomNumber)
		console.log(`It's more, try again...\n`)
	else{
		console.log(`You found the mystery number (${randomNumber}) in ${count} tries\n`)
		rl.close();
		process.exit();
	}
	askNumber(randomNumber, count);
}

/**
 * This function asks the user to input a number to find 
 */
function askNumber(randomNumber, count){
	rl.question(`Insert a number : `, (answer) => {
		test(randomNumber, answer, count);
	})
}

function guessMyNumber(){
	console.log(`=========================`);
	console.log(`### Fork game program ###`);
	console.log(`=========================`);
	// Math.random returns a number beetween 0 and 1. I mutltiply by 100 and round it.
	var randomNumber = Math.round(Math.random() * (100));
	var count = 0;
	askNumber(randomNumber, count);
}

guessMyNumber();