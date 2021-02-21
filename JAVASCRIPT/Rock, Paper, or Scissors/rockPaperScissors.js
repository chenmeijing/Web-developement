const getUserChoice = (userInput) =>{
	userInput = userInput.toLowerCase();

	if(userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' ||userInput === 'bomb'){
		return userInput;
	}else{
		console.log('Error!');
	}

}
// console.log(getUserChoice('rock'));
// console.log(getUserChoice('paper'));
// console.log(getUserChoice('scissors'));
// console.log(getUserChoice('Flower'));

const getComputerChoice = () => {
	let randomNumber = Math.floor(Math.random() * 3);
	if(randomNumber === 0){
		return 'rock';
	}else if(randomNumber === 1){
		return 'paper';
	}else if(randomNumber === 2){
		return 'scissors';
	}
}

// console.log(getComputerChoice());
// console.log(getComputerChoice());
// console.log(getComputerChoice());

const determineWinner = (userChoice, computerChoice) => {
	if(userChoice === computerChoice){
		return 'The game is a tie!';
	}

	if(userChoice === 'rock'){
		if(computerChoice === 'paper'){
			return 'The computer won!';
		}else {
			return 'The user won!';
		}
	}else if(userChoice === 'paper'){
		if(computerChoice === 'scissors'){
			return 'The computer won!';
		}else{
			return 'The user won!';
		}
	}else if(userChoice === 'scissors'){
		if(computerChoice === 'rock'){
			return 'The computer won!';
		}else{
			return 'The user won!';
		}
	}else if(userChoice === 'bomb'){
		if(computerChoice === 'rock' || computerChoice === 'paper' || computerChoice === 'scissors'){
			return 'The user won!';
		}
	}

}

// console.log(determineWinner('paper', 'scissors')); // prints something like 'The computer won!'
// console.log(determineWinner('paper', 'paper')); // prints something like 'The game is a tie!'
// console.log(determineWinner('paper', 'rock')); // prints something like 'The user won!'


function playGame(){
	let userChoice = getUserChoice('rock');
	let computerChoice = getComputerChoice();
	console.log(`You threw: ${userChoice}.`);
	console.log(`The computer threw: ${computerChoice}.`);
	console.log(determineWinner(userChoice, computerChoice));
}

playGame();
