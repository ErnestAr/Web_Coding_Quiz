var answerList = document.querySelector("#ullist");
var answerListItem = document.querySelectorAll("li");
var questionField = document.querySelector("#question");
var correctAnswer = document.querySelector("#showcorrect");
var timer = document.querySelector("#time");
var scoreBoard = document.querySelector("#lastscore");
var startButton = document.querySelector("#startquiz");
var timerH3 = document.querySelector("#timerh3")
var timeLeft = 120;

//Question 1 answer: 3
var question1 =
  "1. JavaScript does NOT have this function built-in, which is commonly used to print or display data in other languages.";
var answersQ1 = ["Speak", "Show", "Output", "Display"];

//Question 2 answer: 4
var question2 =
  "2. What is the element called that is used to describe the set of variables, objects, and functions you explicitly have access to?";
var answersQ2 = ["Output", "Level", "Range", "Scope"];

//Question 3 answer: 1
var question3 =
  "3. What is the name of the object that allows you to perform mathematical tasks with the interpreter?";
var answersQ3 = ["Math", "Count", "Number", "Solve"];

//Question 4 answer: 1
var question4 =
  "4. What is the type of loop that continues through a block of code as long as the specified condition remains TRUE?";
var answersQ4 = ["While Loop", "Else Loop", "For Loop", "Conditional Loop"];

//Question 5 answer:1
var question5 =
  "5. What are the identifiers called that cannot be used as variables or function names?";
var answersQ5 = [
  "Reserved Words",
  " Constants",
  "Concrete Terms",
  " Favorites",
];

//Active time and first question
function init() {
  startButton.addEventListener("click", function () {
    questionField.textContent = "";
    startButton.setAttribute("style", "display: none;");
    startTimer();
    startQ1();
  });
}

//Active Timer
function startTimer() {
  var timerInterval = setInterval(function () {
    timeLeft--;
    timer.textContent = timeLeft;

    if (timeLeft <= 0) {
      clearInterval(timerInterval);
      timer.textContent = "0";
      timeLeft = 0;
      formMenu();
      //Add function here
    }
  }, 1000);
}

function startQ1() {
  //show list items with answers as context by changing class
  questionField.textContent = question1;
  answerList.className = "answerlistshow";
  for (let i = 0; i < answersQ1.length; i++) {
    var liItem = answerListItem[i];
    var choice = answersQ1[i];
    liItem.textContent = choice;
  }
  //set data-answer of the correct answer
  var rightAnswer = answerListItem[2];
  rightAnswer.dataset.answer = "right";

  //check if answer is right or wrong
  answerList.addEventListener("click", function (event) {
    event.stopPropagation();
    var chooseAnswer1 = event.target;
    if (chooseAnswer1.matches("li")) {
      var answerState1 = chooseAnswer1.getAttribute("data-answer");
      if (answerState1 === "wrong") {
        correctAnswer.textContent = "Wrong Answer.";
        timeLeft  -= 10;
        startQ2();
      } else if (answerState1 === "right") {
        correctAnswer.textContent = "Right Answer.";
        startQ2();
      }
    }
  });
}


function startQ2() { setTimeout(function () {
    //show list items with answers as context by changing class
    questionField.textContent = question2;
    correctAnswer.textContent = ""
    for (let i = 0; i < answersQ2.length; i++) {  
        answerListItem[i].dataset.answer = "wrong"
      var liItem = answerListItem[i];
      var choice = answersQ2[i];
      liItem.textContent = choice;
    }
    //set data-answer of the correct answer
    var rightAnswer = answerListItem[3];
    rightAnswer.dataset.answer = "right";
  
    //check if answer is right or wrong
    answerList.addEventListener("click", function (event) {
      event.stopPropagation();
      var chooseAnswer2 = event.target;
      if (chooseAnswer2.matches("li")) {
        var answerState2 = chooseAnswer2.getAttribute("data-answer");
        if (answerState2 === "wrong") {
          correctAnswer.textContent = "Wrong Answer.";
          timeLeft  -= 10;
          startQ3();
        } else if (answerState2 === "right") {
          correctAnswer.textContent = "Right Answer.";
          startQ3();
        }
      }
    });
  
}, 1000 )
}
//timer check function

init()

function startQ3() { setTimeout(function () {
    //show list items with answers as context by changing class
    questionField.textContent = question3;
    correctAnswer.textContent = ""
    for (let i = 0; i < answersQ3.length; i++) {  
        answerListItem[i].dataset.answer = "wrong"
      var liItem = answerListItem[i];
      var choice = answersQ3[i];
      liItem.textContent = choice;
    }
    //set data-answer of the correct answer
    var rightAnswer = answerListItem[0];
    rightAnswer.dataset.answer = "right";
  
    //check if answer is right or wrong
    answerList.addEventListener("click", function (event) {
        event.stopPropagation();
      var chooseAnswer3 = event.target;
      if (chooseAnswer3.matches("li")) {
        var answerState3 = chooseAnswer3.getAttribute("data-answer");
        if (answerState3 === "wrong") {
          correctAnswer.textContent = "Wrong Answer.";
          timeLeft  -= 10;
          startQ4();
        } else if (answerState3 === "right") {
          correctAnswer.textContent = "Right Answer.";
          startQ4();
        }
      }
    });
  
}, 1000 )
}

function startQ4() { setTimeout(function () {
    //show list items with answers as context by changing class
    questionField.textContent = question4;
    correctAnswer.textContent = ""
    for (let i = 0; i < answersQ4.length; i++) {  
        answerListItem[i].dataset.answer = "wrong"
      var liItem = answerListItem[i];
      var choice = answersQ4[i];
      liItem.textContent = choice;
    }
    //set data-answer of the correct answer
    var rightAnswer = answerListItem[0];
    rightAnswer.dataset.answer = "right";
  
    //check if answer is right or wrong
    answerList.addEventListener("click", function (event) {
      var chooseAnswer4 = event.target;
      if (chooseAnswer4.matches("li")) {
        var answerState4 = chooseAnswer4.getAttribute("data-answer");
        if (answerState4 === "wrong") {
          correctAnswer.textContent = "Wrong Answer.";
          timeLeft  -= 10;
          startQ5();
        } else if (answerState4=== "right") {
          correctAnswer.textContent = "Right Answer.";
          startQ5();
        }
      }
    });
  
}, 1000 )
}

function startQ5() { setTimeout(function () {
    //show list items with answers as context by changing class
    questionField.textContent = question5;
    correctAnswer.textContent = ""
    for (let i = 0; i < answersQ5.length; i++) {  
        answerListItem[i].dataset.answer = "wrong"
      var liItem = answerListItem[i];
      var choice = answersQ5[i];
      liItem.textContent = choice;
    }
    //set data-answer of the correct answer
    var rightAnswer = answerListItem[0];
    rightAnswer.dataset.answer = "right";
  
    //check if answer is right or wrong
    answerList.addEventListener("click", function (event) {
        event.stopPropagation();
      var chooseAnswer5 = event.target;
      if (chooseAnswer5.matches("li")) {
        var answerState5 = chooseAnswer5.getAttribute("data-answer");
        if (answerState5 === "wrong") {
          correctAnswer.textContent = "Wrong Answer.";
          timeLeft -= 10;
          formMenu();
        } else if (answerState5 === "right") {
          correctAnswer.textContent = "Right Answer.";
          formMenu();
        }
      }
    });
  
}, 1000 )
}

function formMenu() { setTimeout(function () {
    questionField.textContent = "Your Score: " + timeLeft;
    answerList.className = "hideitem";
    timer.className = "hideitem"
    scoreBoard.className = "hideitem"
    timerH3.className = "hideitem"

  
}, 1000 )
}
