//Global variable list 
let sec = 75

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


$(document).ready(function () {

  //BUTTON FUNCTIONALITY
  $("#start-btn").on("click", function () {
    console.log("sup dawg");
    $("#welcome-box").hide();// hides the welcome box and all of its contents
    $("#q-box").show();// shows the question box 
  });
});

// TIMER FUNCTIONALITY
////LEAVE THE SUBTRACTED TIEM FOR WRONG ANSWER IN THE QUESTIONS FUNCTION!
var timer = setInterval(function () {
  $("#timer").text(sec--);
  if (sec == -1) {
    clearInterval(timer);
    //need to link this to the end page for if the questions arent all answered.. 
  }
}, 1000);

//////////=====  QUIZ LOGIC   =====//////////


//CONTROLING DATA
///WHAT DATA ARE WE TRYING TO CONTROL?
////THE DATA WITHIN THE ARRAY OF QUESTIONS IS WHAT WE ARE TRYING TO CONTROL 

//STEP 1:
//the button on the begining page needs to start the:
////a. timer at seconds = array.length * 15000(15 seconds)
////b. needs to hide the start button/welcome box 
////c. needs to bring in the new information from the question array 

//CONTROLING UI
///WHAT PARTS OF THE UI ARE WE TRYING TO CONTROL?
////WE ARE TRYING TO CONTROL THE LIST ITEMS AND THE QUESTIONS IN UI 
////WE ARE ALSO TRYING TO ALERT THE USER ON IF THEY ARE ANSWERING CORRECTLY OR INCORRECTLY

//CONTROLLER 