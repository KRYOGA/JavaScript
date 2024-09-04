console.log('Hi');

//user input
const getUserChoice = userInput => {
  userInput = userInput.toLowerCase();
  if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors') {
    return userInput;
  } else {
    console.log('Error, please type: rock, paper, or scissors.');
  }
};

//computer input
const getComputerChoice = () => {
  const randomNumber = Math.floor(Math.random() * 3);
  switch (randomNumber){
    case 0:
    return 'rock';
    case 1:
    return 'paper';
    case 2:
    return 'scissors'
  }
};

//determine winner
const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === computerChoice){
    return 'This game is a tie!';
  }
  if (userChoice === 'rock'){
    if (computerChoice === 'paper'){
      return "sorry, computer won!";
    }else{
      return "conglatulations you won!";
    }
  }
  if (userChoice === "paper"){
    if (computerChoice === "scissors"){
      return "sorry, computer won!";
    }else{
      return "conglatulations you won!";
    }
  }
  if (userChoice === "scissors"){
    if (computerChoice === "rock"){
      return "sorry, computer won!";
    }else{
      return "conglatulations you won!";
    }
  }
};

//play game
const playGame = () => {
  const userChoice = getUserChoice('paper');
  const computerChoice = getComputerChoice();
  console.log('you threw:' + userChoice);
  console.log('The computer threw:' + computerChoice);

  console.log(determineWinner(userChoice,computerChoice));
};

playGame()





















