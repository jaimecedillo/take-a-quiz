// variables to keep track of quiz state
var currentQuestionIndex = 0;
var time = questions.length * 15;
var timerId;

// variables to reference DOM elements
var questionsEl = document.getElementById("quiz-box");
var timerEl = document.getElementById("time");
var choicesEl = document.getElementById("answer-buttons");
var submitBtn = document.getElementById("submit");
var startBtn = document.getElementById("start");
var initialsEl = document.getElementById("initials");
var feedbackEl = document.getElementById("feedback");


function startQuiz() {
    // hide start-box
    var startBoxEl = document.getElementById("starting");
    startBoxEl.setAttribute("class", "hide");
    // un-hide quiz-box
    questionsEl.removeAttribute("class");
    // // start timer
    // timerId = setInterval(clockTick, 1000);

    // // show starting time
    // timerEl.textContent = time;
    getQuestion();
}
function getQuestion() {
    // get current question object from array
    var currentQuestion = questions[currentQuestionIndex];
    var titleEl = document.getElementById("question");
    titleEl.textContent = currentQuestion.q;

    var choicesEl = document.getElementById('answer-buttons')
    choicesEl.textContent = currentQuestion.c;
    // button.classList.add('btn');
}




// }
startBtn.addEventListener('click', startQuiz);