console.log("HEllo i am Javascipt");
// import myQuestions from "./questions.js";
const myQuestions = [
    {
      question: "Who invented JavaScript?",
      answers: {
        a: "Douglas Crockford",
        b: "Sheryl Sandberg",
        c: "Brendan Eich"
      },
      correctAnswer: "c"
    },
    {
      question: "Which one of these is a JavaScript package manager?",
      answers: {
        a: "Node.js",
        b: "TypeScript",
        c: "npm"
      },
      correctAnswer: "c"
    },
    {
      question: "Which tool can you use to ensure code quality?",
      answers: {
        a: "Angular",
        b: "jQuery",
        c: "RequireJS",
        d: "ESLint"
      },
      correctAnswer: "d"
    },
    {
        "question": "What is the scientific name of a butterfly?",
        "answers": {
        a : "Apis",
        b : "Coleoptera",
        c : "Formicidae",
        d : "Rhopalocera"
        },
        correctAnswer: "c"
        },
        {
        "question": "How hot is the surface of the sun?",
        "answers": {
        a : "1,233 K",
        b : "5,778 K",
        c : "12,130 K",
        d : "101,300 K"
        },
        correctAnswer: "a"
        },
        {
        "question": "Who are the actors in The Internship?",
        "answers": {
        a : "Ben Stiller, Jonah Hill",
        b : "Courteney Cox, Matt LeBlanc",
        c : "Kaley Cuoco, Jim Parsons",
        d : "Vince Vaughn, Owen Wilson"
        },
        correctAnswer: "c"
        },
        {
        "question": "What is the capital of Spain?",
        "answers": {
        a : "Berlin",
        b : "Buenos Aires",
        c : "Madrid",
        d : "San Juan"
        },
        correctAnswer: "b"
        },
        {
        "question": "What are the school colors of the University of Texas at Austin?",
        "answers": {
        a : "Black, Red",
        b : "Blue, Orange",
        c : "White, Burnt Orange",
        d : "White, Old gold, Gold"
        },
        correctAnswer: "b"
        },
        {
        "question": "What is 70 degrees Fahrenheit in Celsius?",
        "answers": {
        a : "18.8889",
        b : "20",
        c : "21.1111",
        d : "158"
        },
        correctAnswer: "b"
        },
        {
        "question": "When was Mahatma Gandhi born?",
        "answers": {
        a : "October 2, 1869",
        b : "December 15, 1872",
        c : "July 18, 1918",
        d : "January 15, 1929"
        },
        correctAnswer: "a"
        },
        {
        "question": "How far is the moon from Earth?",
        "answers": {
        a : "7,918 miles (12,742 km)",
        b : "86,881 miles (139,822 km)",
        c : "238,400 miles (384,400 km)",
        d : "35,980,000 miles (57,910,000 km)"
        },
        correctAnswer: "b"
        }
  ];
  const quizContainer = document.getElementById('quiz');
  const resultsContainer =document.getElementById('results');
  const submitButton =document.getElementById('submit');
  submitButton.style.backgroundColor = 'green' ;
  submitButton.style.color = 'white' ;
  submitButton.style.borderColor = 'green' ;
// const {myQuestions} = require('./questions.js');
// console.log(myQuestions);
function buildQuiz(){
    const output =[];
    myQuestions.forEach((currentQuestion , index)=>{
        const answers =[];
        for(letter in currentQuestion.answers){
            answers.push(
                `<label>
                <input type="radio" name ="question${index}" value = "${letter}" >
                ${letter} : ${currentQuestion.answers[letter]}
                </label>`
            );
        }
        output.push(`
        <div class = "slide">
        <div class="question">${currentQuestion.question}</div>
        <div class= "answers">${answers.join('<br>')}</div>
        </div>
     `)
    });
   quizContainer.innerHTML = output.join(' ');
}
// ----------------------------- Showing Result ---------------------------------//

function showResult(){
    
    const answerContainers = quizContainer.querySelectorAll(".answers");
   let numCorrect = 0;
   myQuestions.forEach((currentQuestion , index )=>{
    // how to know selected element
      const answerContainer = answerContainers[index]; 
      console.log(answerContainer);
      const selector = `input[name=question${index}]:checked`;
      const userAnswer = (answerContainer.querySelector(selector) || {}).value ;
      console.log(userAnswer);
      if(userAnswer === currentQuestion.correctAnswer){
        numCorrect++;
        // console.log("hello");
        answerContainers[index].style.color = 'lightgreen';
      }
      else{
        answerContainers[index].style.color = 'red';
      }
   });
   resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`; 
   stop();

}

buildQuiz();
submitButton.addEventListener('click' ,showResult);



// ----------------- Pagination ----------------- // 

const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');
const slides = document.querySelectorAll('.slide');
let currentSlide = 0;
showSlide(currentSlide);

function showSlide(n){
    slides[currentSlide].classList.remove('active-slide');
    slides[n].classList.add('active-slide');
    currentSlide = n;
    if(currentSlide === 0){
        prevButton.style.display='none';
    }
    else{
        prevButton.style.display ='inline-block';
    }
    if(currentSlide === slides.length-1){
        nextButton.style.display ='none';
        submitButton.style.display = 'inline-block'
    }
    else{
        nextButton.style.display = 'inline-block';
        submitButton.style.display = 'none';
    }
}

function showNextSlide(){
    showSlide(currentSlide + 1);
}
function showPrevSlide(){
    showSlide(currentSlide - 1);
}
prevButton.addEventListener('click' , showPrevSlide);
nextButton.addEventListener('click' , showNextSlide);


// -------------------------------   Including Timer   -----------------------------------// 
const time = document.getElementById('timer')
var min = 9 ;
var sec = 60 ;
function timer(){
    console.log(sec);
    time.innerHTML =" Time Left is :  "+  min + " " +  sec; 
    
    if(sec === 0 && min>0){
        sec = 60 ;
        min = min -1 ;
    }
    if(min <= 0 && sec <= 0){
          alert("Time Up !! Your Time is up Your quiz will automatically be submitted ");
          stop();
          showResult();
          
    }else{
        sec--;
        setTimeout(timer ,  1000);
    }
    
}
timer();
function stop(){
    time.innerHTML = " Submitted Sucessfully" ;
    min  = 0;
    sec = 0;
}



