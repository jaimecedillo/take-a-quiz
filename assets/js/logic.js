// variables to reference DOM elements
var questionsEl = document.getElementById("question-container");
var timerEl = document.getElementById("time");
var choicesEl = document.getElementById("answer-buttons");
var submitBtn = document.getElementById("submit");
var startBtn = document.getElementById("start");
var initialsEl = document.getElementById("initials");
var feedbackEl = document.getElementById("feedback");

function startQuiz() {
    var startBoxEl = document.getElementById("starting");
    startBoxEl.setAttribute("class", "hide");
};

// function selectAns() {

// }
startBtn.addEventListener('click', startQuiz);