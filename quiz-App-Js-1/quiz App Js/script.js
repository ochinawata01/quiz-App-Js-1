

const start_btn = document.querySelector(".start_btn");
const info_box = document.querySelector(".info_box");
const exit_btn = info_box.querySelector(".buttons .quit");
const continue_btn = info_box.querySelector(".buttons .restart");
const quiz_box = document.querySelector(".quiz_box");

//if start Quiz Button Clicked
start_btn.onclick = ()=>{
    info_box.classList.add("activeInfo") //shows the info box
}


//if Exit  Button Clicked
exit_btn.onclick = ()=>{
    info_box.classList.remove("activeInfo") // hide the info box
}

//if Continue  Button Clicked
continue_btn.onclick = ()=>{
    info_box.classList.remove("activeInfo") //Open the info box
    quiz_box.classList.add("activeQuiz") //Open the quiz box
    showQuestions(0);
    queCounter(1);
}


// quiz questions and answers



const quizData = [
    
    {
        question: "What does HTML stands for ?",
        a: "Hypertext Markup Language",
        b: "Hypertexting Markup Langauge",
        c: "Hypertext machala Language",
        d: "Hypertext marking Language",
        correct: "a",
    },
    
    {
        question: "In Java arrays are treated as ?",
        a: "Objects",
        b: "Primitive Datatypes",
        c: "Object reference",
        d: "None of the above",
        correct: "a",
    },
    {
        question: "Name of a Class, Variable, Method or Interface in Java programming language is called ?",
        a: "Argument",
        b: "Value",
        c: "Identifier",
        d: "None of the above",
        correct: "c",
    },
    {
        question: "What is the output of any logical opreation in Java ?",
        a: "1 or 0",
        b: "True or False",
        c: "Char or String",
        d: "None of the above",
        correct: "b",
    },
    {
        question: "In Java which of the following inner classes is define inside the method of the enclosing class?",
        a: "Regular inner class",
        b: "Static inner class",
        c: "Method-local inner class",
        d: "anonymous inner class",
        correct: "c",
    },
    {
        question: "In Java what is the correct syntax of a generic class ?",
        a: "public <T> class Myclass { }",
        b: "public class <T> Myclass { }",
        c: "public class Myclass <T> { }",
        d: "None of the above",
        correct: "c",
    },
    {
        question: "In Java what is the correct syntax of a generic method ?",
        a: "public <T> T myMethod ( )",
        b: "public myMethod <T> T ( )",
        c: "public <T> myMethod ( ) ",
        d: "public myMethod T ( )",
        correct: "a",
    },
    {
        question: "In Java which of the following classes is used to concrete methods and declare methods without any implementation ?",
        a: "Subclass",
        b: "Superclass",
        c: "Abstract class",
        d: "Final class",
        correct: "c",
    },
    {
        question: "In Java which of the keywords is used to implement an Interface ?",
        a: "implements",
        b: "extends",
        c: "super",
        d: "final",
        correct: "a",
    },
    {
        question: "In Java which one of the following options allows a method to exist in multiple forms  ?",
        a: "Polymorphism",
        b: "Encapsulation",
        c: "Inheritance",
        d: "Abtraction",
        correct: "a",
    },
    
];

const quiz = document.getElementById('quiz')
const answerEls =document.querySelectorAll('.answer')

const questionEl = document.getElementById('question')

const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')

const submitBtn = document.getElementById('submit')

let currentQuiz = 0;
let score = 0;

loadQuiz()

function loadQuiz() {
    deselectAnswers()

    const currentQuizData = quizData[currentQuiz] 

    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getselected(){
    let answer
    answerEls.forEach(answerEl => {
        if (answerEl.checked){
            answer = answerEl.id
        }
    })
    return answer
}

submitBtn.addEventListener('click', () => {
    const answer = getselected()
    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++
        }

        currentQuiz++

        if (currentQuiz < quizData.length){
            loadQuiz()
        } else{
           quiz.innerHTML =  `
           <h2> You answered ${score}/${quizData.length} questions correctly <h2> <button onclick='location.reload()'>Reload</button>
           `
          /* quiz.innerHTML = ' <h2> You answered ${score}/${quizData.length} questions correctly <h2> <button onclick="location.reload{}">Reload</button>' */ 
        
        }
    }
})