//Global variable list 
var startBtn = document.getElementById("start-btn");


//Variable containing the question array, keys and properties. 
var questions = [
  {
  title: "Commonly used data types DO NOT include:",
  choices: ["strings", "booleans", "alerts", "numbers"],
  answer: "alerts"
  },
  {
  title: "The condition in an if / else statement is enclosed within ____.",
  choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
  answer: "parentheses"
  },
  {
  title: "Which typing convention is widely accepted as the norm in the coding community?",
  choices: ["giraffe bumps", "camel case", "lemur tail", "squirrel sprint"],
  answer: "camel case"
  },
  {
  title: "An HTML element created by JavaScript is called ____.",
  choices: ["JSON", "DOM Object", "AJAX", "An Array"],
  answer: "DOM Object"
  },
  {
  title: "CSS file links are contained by which kind of tags in an HTML page?",
  choices: ["<body>", "<html>", "<div>", "<head>"],
  answer: "<head>"
  },
];

//////////=====  QUIZ LOGIC   =====//////////


//CONTROLING DATA
///WHAT DATA ARE WE TRYING TO CONTROL?
////THE DATA WITHIN THE ARRAY OF QUESTIONS IS WHAT WE ARE TRYING TO CONTROL 

//STEP 1:
//the button on the begining page needs to start the:
////a. timer at seconds = array.length * 15000(15 seconds)
////b. needs to hide the start button/welcome box 
////c. needs to bring in the new information from the question array 


startBtn.addEventListener("click", function() {

  var wlcmBox = document.getElementById("welcome-box");
  wlcmBox.classList.add("d-none"); // hides the the class welcome box by addint bootstrap d-none

});


//CONTROLING UI
///WHAT PARTS OF THE UI ARE WE TRYING TO CONTROL?
////WE ARE TRYING TO CONTROL THE LIST ITEMS AND THE QUESTIONS IN UI 
////WE ARE ALSO TRYING TO ALERT THE USER ON IF THEY ARE ANSWERING CORRECTLY OR INCORRECTLY

//CONTROLLER 