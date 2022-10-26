let maximum = parseInt(prompt("Enter the maximum number!"));
while (!maximum) {
	maximum = parseInt(prompt("Enter a number!"));
}

const answer = Math.floor(Math.random() * maximum) + 1;

let guess = prompt(`Enter your first guess! (Or type "quit" to quit)`);
let attempts = 1;

while (parseInt(guess) !== answer) {
	if (guess === "quit") break;
	attempts++;
	if (guess > answer) {
		guess = prompt("Down!");
	} else if (guess < answer) {
		guess = prompt("Up!");
	} else {
		guess = prompt(`Guess is ${guess}, which is not a number!`);
	}
}

if (guess === "quit") {
	alert("Ok.. See you next time :(");
} else {
	alert(`Correct! You guessed ${attempts} times!`);
}
