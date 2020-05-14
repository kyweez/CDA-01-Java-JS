const readline = require('readline');

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

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

function askNumber(randomNumber, count){
	rl.question(`Insert a number : `, (answer) => {
		test(randomNumber, answer, count);
	})
}

function guessMyNumber(){
	console.log(`=========================`);
	console.log(`### Fork game program ###`);
	console.log(`=========================`);
	var randomNumber = Math.round(Math.random() * (100));
	var count = 0;
	askNumber(randomNumber, count);
}

guessMyNumber();