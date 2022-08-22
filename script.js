var startEl = document.querySelector("#start");
var quizEl = document.querySelector("#quiz");
var scoreEl = document.querySelector("#score");
var startButton = document.querySelector("#start button");
var submitButton = document.querySelector("#score button");
var questionsEL = document.querySelector("#question");
var answersEL = document.querySelector("#answers");

var questions = [
    {name: "First", 
    answers: [1,2,3,4,]
    }, 
    {name: "Second",
    answers: [5,6,7,8,]
    },
    {name: "Third",
    answers: [9,10,11,12,]
    },
    {name: "Forth",
    answers: [13,14,15,16,]
    },
    {name: "Fifth",
    answers: [17,18,19,20,]
    },
];

var state = "start";

function display() {

    if (state === "start") {
        startEl.style.display = "block";
        quizEl.style.display = "none";
        scoreEl.style.display = "none";
    }
    
    if (state === "quiz") {
        quizEl.style.display = "block";
        startEl.style.display = "none";
        scoreEl.style.display = "none";
    }
    
    if (state === "score") {
        scoreEl.style.display = "block";
        startEl.style.display = "none";
        quizEl.style.display = "none";
    }
};

display();

function startQuestions() {
    state = "quiz";
    display();
};

startButton.addEventListener("click", function(event) {
    startQuestions();
});




