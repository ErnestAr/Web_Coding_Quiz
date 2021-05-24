var answerList = document.querySelector("#ullist");
var answerListItem = document.querySelectorAll("li");
var questionField = document.querySelector("#question");
var showRes = document.querySelector("#showcorrect");
var timer = document.querySelector("#time");
var scoreBoard = document.querySelector("#lastscore");
var startButton = document.querySelector("#startquiz");
var timerH3 = document.querySelector("#timerh3");
var form = document.querySelector("#ints");
var submitButton = document.querySelector("#submit");
var lastPage = document.querySelector("#lastpage");
var timeLeft = 2;
var nq;
var finishedGame = false;

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
    showRes.textContent = "";
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
      if (finishedGame === false) {
        timer.textContent = "0";
        timeLeft = 0;
        clearInterval(timerInterval);
        formMenu();
      }
    }
  }, 1000);
}

function startQ1() {
  questionField.textContent = question1;
  answerList.className = "answerlistshow";
  for (let i = 0; i < answersQ1.length; i++) {
    answerListItem[i].dataset.answer = "wrong";
    var liItem = answerListItem[i];
    var choice = answersQ1[i];
    liItem.textContent = choice;
  }
  var rightAnswer = answerListItem[2];
  rightAnswer.dataset.answer = "right";
  nq = startQ2;
}

function startQ2() {
  if (finishedGame === false) {
    questionField.textContent = question2;
    showRes.textContent = "";
    for (let i = 0; i < answerListItem.length; i++) {
      answerListItem[i].dataset.answer = "wrong";
      var liItem = answerListItem[i];
      var choice = answersQ2[i];
      liItem.textContent = choice;
    }
    var rightAnswer = answerListItem[3];
    rightAnswer.dataset.answer = "right";
    nq = startQ3;
  }
}

function startQ3() {
  if (finishedGame === false) {
    questionField.textContent = question3;
    showRes.textContent = "";
    for (let i = 0; i < answerListItem.length; i++) {
      answerListItem[i].dataset.answer = "wrong";
      var liItem = answerListItem[i];
      var choice = answersQ3[i];
      liItem.textContent = choice;
    }
    var rightAnswer = answerListItem[0];
    rightAnswer.dataset.answer = "right";
    nq = startQ4;
  }
}

function startQ4() {
  if (finishedGame === false) {
    questionField.textContent = question4;
    showRes.textContent = "";
    for (let i = 0; i < answersQ4.length; i++) {
      answerListItem[i].dataset.answer = "wrong";
      var liItem = answerListItem[i];
      var choice = answersQ4[i];
      liItem.textContent = choice;
    }
    var rightAnswer = answerListItem[0];
    rightAnswer.dataset.answer = "right";
    nq = startQ5;
  }
}

function startQ5() {
  if (finishedGame === false) {
    questionField.textContent = question5;
    showRes.textContent = "";
    for (let i = 0; i < answersQ5.length; i++) {
      answerListItem[i].dataset.answer = "wrong";
      var liItem = answerListItem[i];
      var choice = answersQ5[i];
      liItem.textContent = choice;
    }
    var rightAnswer = answerListItem[0];
    rightAnswer.dataset.answer = "right";
    nq = formMenu;
  }
}

function formMenu() {
  clearInterval(startTimer);
  questionField.textContent =
    "Your score is " + timeLeft + ", enter your Initials below.";
  showRes.textContent = "";
  answerList.className = "hideitem";
  timer.className = "hideitem";
  scoreBoard.className = "hideitem";
  timerH3.className = "hideitem";
  form.className = "";
  submitButton.className = "";
  finishedGame = true;
}

//change questions, adjust time
answerList.addEventListener("click", function (event) {
  var chooseAnswer = event.target;
  var answerState = chooseAnswer.getAttribute("data-answer");
  if (answerState === "wrong") {
    showRes.textContent = "Wrong Answer.";
    showRes.setAttribute("style", "color: red");

    timeLeft -= 10;
    setTimeout(nq, 1000);
  } else if (answerState === "right") {
    showRes.textContent = "Right Answer.";
    setTimeout(nq, 1000);
    showRes.setAttribute("style", "color: green");
  }
});

//Submit Score
submitButton.addEventListener("click", function () {
  var saveInitials = {
    initials: form.value.trim(),
    score: timeLeft,
  };
  localStorage.setItem("saveInitials", JSON.stringify(saveInitials));
  showRes.classList = "";
  showRes.setAttribute("style", "color: black");
  showRes.textContent =
    "Saved! " + saveInitials.initials + " : " + saveInitials.score;
  setTimeout(lastPageInit, 2000);
});

//Initiate last page
function lastPageInit() {
  questionField.setAttribute("style", "text-align: center");
  showRes.textContent = "";
  submitButton.className = "hideitem";
  form.className = "hideitem";
  var eachButton = lastPage.children;
  for (let i = 0; i < eachButton.length; i++) {
    eachButton[i].className = "";
  }
  questionField.textContent =
    "Thank you for taking the quiz. Don't forget, learning is an ongoing process, it never stops.";
}

//Last page buttons
lastPage.addEventListener("click", function (event) {
  var chooseOption = event.target;
  var buttonId = chooseOption.getAttribute("id");
  //restart page button
  if (buttonId === "restart") {
    location.reload();
  } //clear scores button
  else if (buttonId === "clearscore") {
    localStorage.clear();
    showRes.textContent = "All data cleared!";
  } //Last score button
  else if (buttonId === "lscore") {
    var lastResult = JSON.parse(localStorage.getItem("saveInitials"));
    if (lastResult !== null) {
      showRes.textContent =
        "Last results " + lastResult.initials + " : " + lastResult.score;
    } else if (lastResult === null) {
      showRes.textContent = "No saved resultes.";
    }
  }
});

//Show last results on home page
scoreBoard.addEventListener("click", function () {
  var lastResult = JSON.parse(localStorage.getItem("saveInitials"));
  if (lastResult !== null) {
    showRes.textContent =
      "Last results " + lastResult.initials + " : " + lastResult.score;
  } else if (lastResult === null) {
    showRes.textContent = "No saved resultes.";
  }
});
init();
