let readlineSync = require("readline-sync");

let score = 0;

let highScores = [
  {
    name:"Shivin",
    score:2
  },
  {
    name:"Amber",
    score: 2
  }
];

// questions
let questionBank = [
  {
    question: "Which company started Air India? ",
    answer: "Tata"
  },
  {
    question: "Which is the larget seller of two wheller in volumes? ",
    answer: "Hero"
  },
  {
    question:"Name this women’s cooperative that has 650 cr sales and exports of 29 cr. ",
    answer: "Lijjat"
  }

];

// Welcome function
function welcome() {
  let userName = readlineSync.question("Whats your name? ");
  let welcomeMessage = "Welcome " + userName + " to Indian Business Quiz!"
  console.log(welcomeMessage);
}

// ask the question
function askTheQuestion(question, answer) {
  let userAnswer = readlineSync.question(question);
  if (userAnswer.toLocaleUpperCase() === answer.toLocaleUpperCase()) {
    console.log("You are correct!");
    score = score + 1;
  }
  else {
    console.log("Sorry! Wrong answer");
  }
  console.log("Your score is: " + score);
  console.log("-------");
}

// roll out the question

function game(){
  for(let i =0 ;i < questionBank.length ; i++){
    let currentQuestion = questionBank[i];
    askTheQuestion(currentQuestion.question , currentQuestion.answer);
  }
}

function displayScore(){
  console.log("Yay! you finished the game and you scored "+score);
  console.log("Check out the high scores!");
  highScores.map(record => (console.log(record.name , " : " , record.score)));
}

welcome();
game();
displayScore();