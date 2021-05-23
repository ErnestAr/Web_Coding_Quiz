var answerList = document.querySelector("#ullist")
var answerlistItem = document.querySelectorAll("li")
var questionField = document.querySelector("#question");
var correctAnswer = document.querySelector("#showcorrect")
var timer = document.querySelector("#time")
var scoreBoard = document.querySelector("#lastscore")
var startButton = document.querySelector("#startquiz")
var timeLeft = 60;

//Question 1 answer: 3
var quesiton1 = "JavaScript does NOT have this function built-in, which is commonly used to print or display data in other languages."
var answersQ1 = ["Speak", "Show","Output","Display"]

//Question 2 answer: 4
var quesiton2 = "What is the element called that is used to describe the set of variables, objects, and functions you explicitly have access to?"
var answersQ2 = [  "Output", "Level", "Range",  "Scope"]
    
//Question 3 answer: 1
var quesiton3 = "What is the name of the object that allows you to perform mathematical tasks with the interpreter?"
var answersQ3 = ["Math", "Count", "Number",  "Solve"]

//Question 4 answer: 1
var quesiton4 = "What is the type of loop that continues through a block of code as long as the specified condition remains TRUE?"
var answersQ4 = ["While Loop","Else Loop","For Loop","Conditional Loop"]

//Question 5 answer:1
var quesiton1 = "What are the identifiers called that cannot be used as variables or function names?"
var answersQ1 = ["Reserved Words"," Constants","Concrete Terms"," Favorites"]

//Active
function init() {
    startButton.addEventListener("click", function(){
        questionField.textContent = ""
        startButton.setAttribute("style", "display: none;")
        startTimer()
        startQ1()
    })
}



    //Active
function startTimer() {
    var timerInterval = setInterval(function() {
    timeLeft--;
    timer.textContent = timeLeft;

    if(timeLeft === 0) {
        clearInterval(timerInterval);
        //Add function here
        }
    }, 1000);
}
init()


function startQ1() {
    //show list items with answers as context by changing class, thus display settings
    questionField.textContent = quesiton1;
    answerList.className = "answerlistshow" 
    for (let i = 0; i < answersQ1.length; i++) {
            var liItem = answerlistItem[i];
            var choice = answersQ1[i];
            liItem.textContent = choice;
            
    }
    //set data-answer of the correct answer
    var rightAnswer = answerlistItem[2]
    rightAnswer.dataset.answer = "right";

}


