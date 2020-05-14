const readline = require('readline');

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

// Math.random returns a number between 0 and 1. 
let randomNumber = Math.round(Math.random() * (20));
let i = 0;

function askNumber(randomNumber){
	rl.question('Find the number :', (answer) => {
		test(answer, randomNumber);
	});
}

function test(answer, randomNumber, i){
	console.log(`i = ${i}`+ typeof i);
	i++;
	if (Number(answer) === randomNumber){
		console.log(`You found ${answer} in ${i} tries.`);
	}
	else{
		console.log(Number(answer) < randomNumber ? "It's more" : "It's less");
		console.log("Try again");
		askNumber(randomNumber);
	}
}

askNumber(randomNumber);