// var user = document.getElementById("username");
//  var name = prompt("What is your name?");
//  confirm(name + ", welcome to Get Quizy");
// user.innerText = name;
// var date = new Date();
// document.getElementById("date").innerText = "Today is date " + date.getDate();


const quizQuestions=[
    {
        question:"What does HTML stand for?",
        a:"Heavy Text Material Language",
        b:"Hyper Type Markup Language",
        c:"Hyper Text Mark Language",
        d:"Hyper Text Markup Language",
        correct: "d",
    },
    {
        question:"What does CSS stand for?",
        a:"Cascading Still Sheets",
        b:"Cascading Style Sheets",
        c:"Cascading Simple Sheets",
        d:"It doesn't stand for anything",
        correct:"b", 
    },
    {
        question:"Which of these is not a css selector?",
        a:"class selector",
        b:"Id selector",
        c:"universal selector",
        d:"style selector",
        correct:"d",
    },
    {
        question:"How many divs can one have in an HTML document?",
        a:"less than 5",
        b:"less than 10",
        c:"As many as one please",
        d:"only 1",
        correct:"c" 
    },
    {
        question:"When was javascript created?",
        a:"1995",
        b:"1996",
        c:"1994",
        d:"1997",
        correct:"a"
    }

];

var quiz = document.getElementById("quiz");
var question = document.getElementById("question");
var answerLists = document.querySelectorAll(".answer");
var textA = document.getElementById("textA");
var textB = document.getElementById("textB");
var textC = document.getElementById("textC");
var textD = document.getElementById("textD");
var submitbtn = document.getElementById("submitbtn");



let currentQuestion = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
   
    
    var firstQuestion=quizQuestions[currentQuestion];

    question.innerText = firstQuestion.question;
    textA.innerText = firstQuestion.a;
    textB.innerText = firstQuestion.b;
    textC.innerText = firstQuestion.c;
    textD.innerText = firstQuestion.d;
    
};

function selectAnswer() {
    let answer
    answerLists.forEach(answerList => {
        if(answerList.checked) {
            answer = answerList.id
        }
    })
    return answer
}

submitbtn.addEventListener('click', clickbtn())

function clickbtn(){
 const answer = selectAnswer();
    if(answer){
        
        if(answer === quizQuestions[currentQuestion].correct){
            
           score += 1; 
        };
        
        currentQuestion++;

        if(currentQuestion<quizQuestions.length){
        loadQuiz();
        }else{
            quiz.innerHTML = `<h2>${name}, you have answered ${score}/${quizQuestions.length} questions correctly.<br>
            Refresh the page to go again  =)`
            

        };
    };

}



