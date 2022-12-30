// Fucntion for getting User's choice
const getUserChoice = userInput => {
  userInput = userInput.toLowerCase();
  if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors') {
    return userInput
  } else {
    console.log("Error Message!");
  }
};

console.log(getUserChoice('rock'));
console.log(getUserChoice('pap'));

// Fucntion for getting Computer's choice
const getComputerChoice = () => {
  let randomNumber = Math.floor(Math.random() * 3);
  switch (randomNumber) {
    case 0:
      return 'rock';
      break;
    case 1:
      return 'paper';
      break;
    case 2:
      return 'scissors';
      break;
    default:
      console.log('Error Message!');
  }
};

// Fucntion for determining winner
const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === computerChoice) {
    return 'Game was a tie!';
  }

  if (userChoice === 'rock') {
    if (computerChoice === 'paper') {
      return 'Computer won!';
    } else {
      return 'User won!';
    }
  }

  if (userChoice === 'paper') {
    if (computerChoice === 'scissors') {
      return 'Computer Won!';
    } else {
      return 'User won!';
    }
  }

  if (userChoice === 'scissors') {
    if (computerChoice === 'rock') {
      return 'Computer won!';
    } else {
      return 'User Won!';
    }
  }
};

console.log(determineWinner('paper', 'rock'));
console.log(determineWinner('paper', 'scissors'));
console.log(determineWinner('scissors', 'rock'));

// Fucntion to log and start game
const playGame = () => {
  const userChoice = getUserChoice('rock');
  const computerChoice = getComputerChoice();
  console.log('You threw: ' + userChoice);
  console.log('Computer threw: ' + computerChoice);
  console.log(determineWinner(userChoice, computerChoice));
};

playGame();