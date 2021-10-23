
// Make timer

// var timeEl = document.querySelector(".time");

// var secondsLeft = 60;

// function setTime() {
//   // Sets interval in variable
//   var timerInterval = setInterval(function() {
//     secondsLeft--;
//     timeEl.textContent = secondsLeft + " seconds left to play.";

//     if(secondsLeft === 0) {
//       // Stops execution of action at set interval
//       clearInterval(timerInterval);
//       // Calls function to create and append image
//       sendMessage();
//     }

//   }, 1000);
// }

// // Make timer work
// playBtn.addEventListener("click", function(event){
//     timeEl.textContent()
//     });


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
        answer4: "It is strictly equal.",
        correctAnswer: "It is strictly equal."
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

var answerbutton = document.querySelector(".answerbuttons")

answerbutton.addEventListener("click", function(event){
    // test if question is correct
    console.log(event.target.value)
    if (event.target.value === questionArray[nextQuestion].correctAnswer){
        console.log("correct") 
    }
    
    nextQuestion++
    displayNextQuestion()
})


function displayNextQuestion(){
    var question = document.querySelector("#question");
    question.innerText =  questionArray[nextQuestion].question;
    answer1.innerText = questionArray[nextQuestion].answer1
    answer1.setAttribute("value",questionArray[nextQuestion].answer1)
    answer2.innerText = questionArray[nextQuestion].answer2
    answer2.setAttribute("value",questionArray[nextQuestion].answer2)
    answer3.innerText = questionArray[nextQuestion].answer3
    answer3.setAttribute("value",questionArray[nextQuestion].answer3)
    answer4.innerText = questionArray[nextQuestion].answer4
    answer4.setAttribute("value",questionArray[nextQuestion].answer4)
}

var playBtn = document.querySelector("#play");


playBtn.addEventListener("click", function(event){
playBtn.remove();
event.preventDefault();    
displayNextQuestion();
});


// make the buttons have answers on them 
// function to check answer
// make the buttons display 'correct' or 'wrong" possibly using alert box
// subtract time if score is wrong
// keep record of how score

// when last answer button is clicked, create field for user to input initials/ name 

// create submit button to take user to high scores page

// button for user to go back to original screen with play button







