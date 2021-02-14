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
var questionEl = document.getElementById("question");
// var highScores = JSON.parseInt(localStorage.getItem("HighScores")) || [];

function startQuiz() {
    // hide start-box
    var startBoxEl = document.getElementById("starting");
    startBoxEl.setAttribute("class", "hide");
    // un-hide quiz-box
    questionsEl.removeAttribute("class");
    // start timer
    timerId = setInterval(clockTick, 1000);

    // show starting time
    timerEl.textContent = time;
    getNextQuestion();
}


function getNextQuestion() {
    var currentQuestion = questions[currentQuestionIndex];
    if (currentQuestion) {
        choicesEl.innerHTML = "";
        questionEl.textContent = currentQuestion.q;
        currentQuestion.c.forEach(function (choice) {
            var buttonEL = document.createElement("button");
            buttonEL.classList.add('btn');
            buttonEL.textContent = choice;
            buttonEL.addEventListener("click", checkAnswer);
            choicesEl.appendChild(buttonEL);
        })
    } else {
        quizEnd();
    }
}

function checkAnswer(event) {
    if (event.target.textContent !== questions[currentQuestionIndex].a) {
        time -= 10;
        timerEl.textContent = time;
        currentQuestionIndex++;
        document.body.classList.add("wrong")
        setTimeout(function () {
            document.body.classList.remove("wrong")
            getNextQuestion()
        }, 2000)
    } else {
        currentQuestionIndex++;
        document.body.classList.add("correct")
        setTimeout(function () {
            document.body.classList.remove("correct")
            getNextQuestion()

        }, 2000)
    }
}


// }
startBtn.addEventListener('click', startQuiz);

