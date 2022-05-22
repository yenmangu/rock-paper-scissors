//create const variables rock, paper and scissors. 
//assign them integer values of 0,1 and 2 respectively

const rock = 0
const paper = 1
const scissors = 2

//takes input from user, stores in variable userChoice using prompt()
let userChoice = prompt("please choose either rock, paper or scissors")

//output "you have chosen userChoice"
console.log("You have chosen " + userChoice +"!");
//test
console.log(userChoice);
//assign variable pcChoice random number from 0-2
let pcChoice = Math.floor(Math.random()* 3)
//test
console.log(pcChoice);
//output pcChoice as rock paper or scissors
if (pcChoice === 0) {
  pcChoiceString = "rock"
  //console.log(pcChoice)
} else if (pcChoice === 1) {
  pcChoiceString = "paper"
  //console.log(pcChoice) 
  } else {
    pcChoiceString = "scissors"
  //console.log(pcChoice)
  };

//output pc has chosen: pcChoice
console.log ("pc has chosen " + pcChoiceString + "!");


//create userInt to number using rock paper and scissors constant variables
if (userChoice === "rock") {
  userChoiceInt = 0;
} else if (userChoice === "paper") {
  userChoiceInt = 1;
} else {
  userChoiceInt = 2;
}
//return userInt
console.log(userChoiceInt);

//function win = console.log("you have won")
//function lose = console.log("you have lost")
//function draw = console.log("uh oh, its a draw")
function win() {
  console.log("You have won!")
}
function lose () {
  console.log("You have lost!")
}
function draw () {
  console.log("Uh oh! You have drawn!")
}
//test
//win();
//lose();
//draw();

//compare userChoiceInteger variable to PcChoiceeger variable

//if userChoiceInt === pcChoiceInt
//return funcDraw"

//else if userChoiceInt === 0 && PcChoice === 2
//return funcWin"

//else if userChoiceInt > PcChoice
//return funcWin

//else if pcChoiceInt === 0 && userChoiceInt === 2
//return funcLose

//else return funcLose"
if (userChoiceInt === pcChoice) {
  draw()
} else if (userChoiceInt === 0 && pcChoice === 2) {
  win()
} else if (userChoiceInt > pcChoice) {
  win()
} else if (pcChoice === 0 && userChoiceInt === 2) {
  lose()
} else {
  lose()
};