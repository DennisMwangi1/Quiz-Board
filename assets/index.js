 /*function loading(){
    alert("Welcome to Get Quizy.")
}*/
function name(){
    let username = prompt("Please enter your name")
    if(username != null){
        document.getElementById("username").innerHTML=username
    }else{
        document.getElementById("username").innerText="player1"
    }
}
function date(){
   alert(Date) 
}

const quizQuestions=[
    {
        question:"What does HTML stand for?",
        a:"Heavy Text Material Language",
        b:"Hyper Type Markup Language",
        c:"Hyper Text Mark Language",
        d:"Hyper Text Markup Language",
        correct:d
    },
    {
        question:"What does CSS stand for?",
        a:"Cascading Still Sheets",
        b:"Cascading Style Sheets",
        c:"Cascading Simple Sheets",
        d:"It doesn't stand for anything",
        correct:b 
    },
    {
        question:"Which of these is not a css selector?",
        a:"class selector",
        b:"Id selector",
        c:"universal selector",
        d:"style selector",
        correct:d
    },
    {
        question:"How many divs can one have in an HTML document?",
        a:"less than 5",
        b:"less than 10",
        c:"As many as one please",
        d:"only 1",
        correct:c 
    },
    {
        question:"When was javascript created?",
        a:"1995",
        b:"1996",
        c:"1994",
        d:"1997",
        correct:a
    }

]

var quiz = document.getElementById("quiz");
var questionEl = document.getElementById("question");
var answerEls = document.querySelectorAll(".answer");
var textA = document.getElementById("textA");
var textB = document.getElementById("textB");
var textC = document.getElementById("textC");
var textD = document.getElementById("textD");
var submitbtn = document.getElementById("submitbtn");



var currentQuestion = 0;
var score = 0;

loadQuiz();

function loadQuiz() {
   

    var firstQuestion=quizQuestions[currentQuestion];

    questionEl.innerText = firstQuestion.question;
    textA.innerText = firstQuestion.a;
    textB.innerText = firstQuestion.b;
    textC.innerText = firstQuestion.c;
    textD.innerText = firstQuestion.d;
};

function selectAnswer(){
    var answer;
    answerEls.forEach((answerEl)=>{
        if(answerEl.checked){
            answer = answerEl.id
        };

    });
    return answer;
};

submitbtn.addEventListener("click", function(){
    var answer = selectAnswer();
    if(answer){
        if(answer === quizQuestions[currentQuestion].correct){
            
            score++;
        };
        currentQuestion++;

        if(currentQuestion<quizQuestions.length){
        loadQuiz();
        }else{
            quiz.innerHTML = `<h2>You have scored ${total}/${quizQuestions.length} questions correctly`
        };
    };
});
