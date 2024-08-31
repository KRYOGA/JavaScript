let userName = "Michel";

//if the user enter the name, user string interpolation. otherwise, log hello
userName ? console.log(`Hello , ${userName}`) : console.log("Hello");

//question that user wants to ask the Magic Eight Ball
let userQuestion = "Will I adopt a new puppy soon?";
console.log(`${userName} has asked - ${userQuestion}`);

// we need to create a random number between 0 and 7
let randomNumber = Math.floor(Math.random() * 8);
console.log(randomNumber);

/*
We need to create a control flow that takes in the randomNumber we made in step 5, and then assigns eightBall to a reply that a Magic Eight Ball would retur
*/
let eightBall = "";

switch (randomNumber) {
  case 0:
    eightBall = "It is certain";
    break;
  case 1:
    eightBall = "It is decidedly so";
    break;
  case 2:
    eightBall = "Reply hazy try again";
    break;
  case 3:
    eightBall = "Cannot predict now";
    break;
  case 4:
    eightBall = "Do not count on it";
    break;
  case 5:
    eightBall = "My sources say no";
    break;
  case 6:
    eightBall = "Outlook not so good";
    break;
  case 7:
    eightBall = "Signs point to yes";
    break;
}

console.log(`The magic ball says "${eightBall}".`);

