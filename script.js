var questionArray = [
    {
        question: "JavaScript is _______ threaded.", 
        answer1: "double",
        answer2: "triple",
        answer3: "single",
        answer4: "not",
        correctAnswer: "single"
    },
    {
        question: "What JavaScript feature enables a function to be executed just after it has been defined without being called explicitly?", 
        answer1: "Else and If Statement",
        answer2: "Immediately Invoked Function Expression",
        answer3: "Object-Centered Script Language",
        answer4: "Case Sensitive format",
        correctAnswer: "Immediately Invoked Function Expression"
    },
    {
        question: "In JavaScript, what does === mean?", 
        answer1: "It is somewhat equal.",
        answer2: "It is not equal.",
        answer3: "It is the opposite.",
        answer4: "It is a strictly equal.",
        correctAnswer: ""
    },
    {
        question: "In Javascript, arrays should be put within", 
        answer1: "[ ]",
        answer2: "* *",
        answer3: "( )",
        answer4: "{ }",
        correctAnswer: "[ ]"
    },
    {
        question: "As of this year, about what percentage of web pages use JavaScript?", 
        answer1: "50",
        answer2: "10",
        answer3: "95",
        answer4: "35",
        correctAnswer: "95"
    }
]

var nextQuestion = 0 

var answer1 = document.querySelector("#answer1");
var answer2 = document.querySelector("#answer2");
var answer3 = document.querySelector("#answer3");
var answer4 = document.querySelector("#answer4");

answer1.addEventListener("click", function(event){
    event.preventDefault();
    nextQuestion++
    console.log(answer1.innerText);
    displayNextQuestion()
})

answer2.addEventListener("click", function(event){
    event.preventDefault();
    nextQuestion++
    console.log(answer2.innerText);
    displayNextQuestion()
})

answer3.addEventListener("click", function(event){
    event.preventDefault();
    nextQuestion++
    console.log(answer3.innerText);
    displayNextQuestion()
})

answer4.addEventListener("click", function(event){
    event.preventDefault();
    nextQuestion++
    console.log(answer4.innerText);
    displayNextQuestion()
})

function displayNextQuestion(){
    var question = document.querySelector("#question");
    question.innerText =  questionArray[nextQuestion].question;
    answer1.innerText = questionArray[nextQuestion].answer1
}

function displayNextQuestion(){
    var question = document.querySelector("#question");
    question.innerText =  questionArray[nextQuestion].question;
    answer2.innerText = questionArray[nextQuestion].answer2
}

function displayNextQuestion(){
    var question = document.querySelector("#question");
    question.innerText =  questionArray[nextQuestion].question;
    answer3.innerText = questionArray[nextQuestion].answer3
}

function displayNextQuestion(){
    var question = document.querySelector("#question");
    question.innerText =  questionArray[nextQuestion].question;
    answer4.innerText = questionArray[nextQuestion].answer4
}

var playBtn = document.querySelector("#play");

playBtn.addEventListener("click", function(event){
event.preventDefault();    
displayNextQuestion();
});

//timer in nav bar
 
//button to take to high score page in nav bar

//function to check answer
//right or wrong if wrong, subtract time; need access to that var in this function; set var for timer globallhy
//take you to the next ?

//dynanamically change elements dep on what ? user is on 

