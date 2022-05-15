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

const quiz = document.getElementById("quiz")
const questionEl = document.getElementById("question")
const answerEl = document.querySelectorAll(".answer")
const textA = document.getElementById("textA")
const textB = document.getElementById("textB")
const textC = document.getElementById("textC")
const textD = document.getElementById("textD")
const submitbtn = document.getElementById("submit")



let currentQuestion = 0;
let score = 0;

loadQuiz()

function loadQuiz() {
    
    const firstQuestion=quizQuestions[currentQuestion]

    questionEl.innerHTML = firstQuestion.question
    textA.innerHTML = firstQuestion.a
    textB.innerHTML = firstQuestion.b
    textC.innerHTML = firstQuestion.c
    textD.innerHTML = firstQuestion.d
}