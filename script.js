var startEl = document.querySelector("#start");
var quizEl = document.querySelector("#quiz");
var scoreEl = document.querySelector("#score");
var gameOverEl = document.querySelector("#game-over");
var startButton = document.querySelector("#start button");
var submitButton = document.querySelector("#score button");
var questionEL = document.querySelector("#question");
var answersEl = document.querySelector("#answers");
var timerEl = document.querySelector("#quiz-timer");
var newScoreEl = document.querySelector("#new-score");

var state = "start";
var position = 0;
var timeLeft = 60; 
var newScore = 0;

var questions = [
    {name: "Commonly used data types DO Not include:", 
    possibleAnswers: ['strings','booleans','alerts','numbers'],
    correct: 'alerts'
    }, 
    {name: "The condition in an if/else statement is enclosed with _______.",
    possibleAnswers: ['quotes','curly brackets','parenthesis','square brackets'],
    correct: 'parenthesis'
    },
    {name: "Arrays in JavaScript can be used to store _________.",
    possibleAnswers: ['numbers and strings','other arrays','booleans','all of the above'],
    correct: 'all of the above'
    },
    {name: "String values must be enclosed within ________ when being assigned to variables.",
    possibleAnswers: ['commas','curly brackets','quotes','parenthesis'],
    correct: 'quotes'
    },
    {name: "A very useful too used during development and debugging for printing content to the debugger is:",
    possibleAnswers: ['JavaScript','terminal/bash','for loops','console log'],
    correct: 'console log'
    }
];

function display() {

    if (state === "start") {
        startEl.style.display = "block";
        quizEl.style.display = "none";
        scoreEl.style.display = "none";
        gameOverEl.style.display = "none";
    }
    
    if (state === "quiz") {
        quizEl.style.display = "block";
        startEl.style.display = "none";
        scoreEl.style.display = "none";
        gameOverEl.style.display = "none";
    }
    
    if (state === "score") {
        scoreEl.style.display = "block";
        startEl.style.display = "none";
        quizEl.style.display = "none";
        gameOverEl.style.display = "none";
    }
    if (state === "gameover") {
        gameOverEl.style.display = "block";
        startEl.style.display = "none";
        quizEl.style.display = "none";
        scoreEl.style.display = "none";
    }
};

display();

function startQuestions() {
    state = "quiz";
    position = 0;
    display();
    displayQuestion();
    timer();
};

function displayQuestion() {
    questionEL.textContent = questions[position].name;
    answersEl.textContent = null;
    
    for (let i = 0; i < 4; i++) {
        var buttonEl = document.createElement('button');
        answersEl.appendChild(buttonEl);
        buttonEl.textContent = questions[position].possibleAnswers[i];
    };
};

function gameOverScreen() {
    state = "gameover";
    display();
    clearInterval(time);
};

function timer(){
    time = setInterval(function() {
        timeLeft --;
        timerEl.innerHTML = "Time remaining: " + timeLeft;
        
        if (timeLeft === 0) {
            gameOverScreen();
        };
    }, 1000);
};

function displayScore() {
    state = "score";
    display();
    newScoreEl.textContent = "Congrats! Your scored " + newScore + " points!";
}

startButton.addEventListener("click", function(event) {
    startQuestions();
});

quizEl.addEventListener("click", function(event) {
    var element = event.target;
    if (element.matches('button')) {
        if (element.textContent === (questions[position].correct)){
            newScore += timeLeft;
            position ++;
        } 

        else {
            timeLeft -= 15;
            alert('Choice was incorrect!')
        }

        if (position > 4 ) {
            clearInterval(time);
            displayScore();
        }

        else {
            displayQuestion();
        }
    }
});

submitButton.addEventListener("click", function(event){
    event.preventDefault;
    scoreInitials();
});

function scoreInitials() {

};


