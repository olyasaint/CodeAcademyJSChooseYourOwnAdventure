// Check if the user is ready to play!
confirm ("Ready?")
// Prompt user and check their age.
var age = prompt ("What's your age?");
if (age<13) {
  console.log ("You are too young to play");
  
} else {
  console.log ("Go on and play!");
  }
console.log ("You are at a Justin Bieber concert, and you hear this lyric 'Lace my shoes off, start racing.'");
console.log ("Suddenly, Bieber stops and says, 'Who wants to race me?'");

//Prompt user for their desire to race Justin and contine the story
var userAnswer = prompt ("Do you want to race Bieber at stage?");

if (userAnswer = "yes") {
  console.log ("You and Bieber start racing. It's neck and neck! You win by a shoelace!");
  
}
else {
  console.log ("Oh no! Bieber shakes his head and sings 'I set a pace, so I can race without pacing.'");
  
}
// Ask the player for feedback
var feedback = prompt ("rate our game out of 10");

if (feedback>8) {
  console.log ("Thank you! We should race at the next concert!");
  
}
else {
  console.log ("I'll keep practicing coding and racing.");
  
}
