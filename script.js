var startEl = document.querySelector("#start");
var quizEl = document.querySelector("#quiz");
var scoreEl = document.querySelector("#score");
var startButton = document.querySelector("#start button");
var submitButton = document.querySelector("#score button");
var questionEL = document.querySelector("#question");
var answersEl = document.querySelector("#answers");

var questions = [
    {name: "First", 
    possibleAnswers: [1,2,3,4],
    correct: 0
    }, 
    {name: "Second",
    possibleAnswers: [5,6,7,8],
    correct: 3
    },
    {name: "Third",
    possibleAnswers: [9,10,11,12],
    correct: 1
    },
    {name: "Forth",
    possibleAnswers: [13,14,15,16],
    correct: 0
    },
    {name: "Fifth",
    possibleAnswers: [17,18,19,20],
    correct: 2
    }
];

var state = "start";
var position = 0;

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
    position = 0;
    display();
    displayQuestion();
};

var buttonEl = document.createElement('button');
answersEl.appendChild(buttonEl);

function displayQuestion() {
    questionEL.textContent = questions[position].name;

    for (let i = 0; i < questions.length; i++) {
    buttonEl.textContent = questions[position].possibleAnswers[i];
    };
};

startButton.addEventListener("click", function(event) {
    startQuestions();
});

quizEl.addEventListener("click", function(event) {
    var element = event.target;
    if (element.matches('button')) {
         position ++;

         if (position > 4 ) {
            state = "score";
            display();
         }

         else {
                displayQuestion();
         }
    }
});