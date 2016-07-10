// Use Cases
//
// 1. Players (two of them) submit names
// 2. Start quiz
// 3. Each Player takes turns answering questions which are displayed in no particular sequence.
// 4. After answering by clicking on true or false, view next question
// 5. Players repeat steps 3 and 4 until they"ve reached a total of 10 questions
// 6. The Player with more correct answers, wins!





function pair(q, a) {
  this.q = q;
  this.a = a;
}

var pair1 = new pair("Questions can be answers?", true);
var pair2 = new pair("\"Peter Piper picked a peck of pickled peppers.\"<br><br>Perhaps, philosophically, Peter is a pompous prick and a perpetual kleptomanic.", true);
var pair3 = new pair("(typeof \"true\" == \"string\");<br>Returns true.<br> True?<br>hint: Think through.", true);
var pair4 = new pair("\"Bacon\"", true);
var pair5 = new pair("According to Led Zeppelin:<br><br>If there is a bustle in your hedgerow, you should not be alarmed.", true);    var pair6 = new pair("\"Barny creates quiz,<br>The quiz works and Barny lives,<br>Barny completes 1a.\"<br><br>Is the above a haiku?", false);
var pair7 = new pair("Short is shorter than Long if we assume they are both strings and are comparing their length.", false);
var pair8 = new pair("Friend or faux?<br>Therein, lies the rub", false);
var pair9 = new pair("This quiz, it is good, no?<br>Now now, never suck-up to win!", false);
var pair10 = new pair("\"Work it harder, make it better,<br>do it faster, makes us stronger.\"<br><br>Is the official motto of the International Bakers Society.", false);

var qA = [pair1, pair2, pair3, pair4, pair5, pair6, pair7, pair8, pair9, pair10];

var random = 0;
var question = "";
var answer = true;

function nextQ() {
   random = Math.floor(Math.random() * 10);
   question = qA[random].q;
   answer = qA[random].a;
   var displayQ = $("#ask");
   displayQ.html(question);
}nextQ();





$(document).ready(function () {

//1.
var playerOne = prompt("Player 1:\nPlease enter your name");
var playerTwo = prompt("Player 2:\nPlease enter your name");
var playerOneScore = 0;
var playerTwoScore = 0;
$(".playOne").html(playerOne + ": 0");
$(".playTwo").html(playerTwo + ": 0");

//2.
var totalTurns = 1;

function whoseTurn() {
  if (totalTurns % 2 == 1) {
    $("h2").html(playerOne + "'s turn");
  }
  else {
    $("h2").html(playerTwo + "'s turn");
  }
}whoseTurn();


var trueButton = $("#option1");
var falseButton = $("#option2");

trueButton.click(function() {
  var choice1 = true;
  if (totalTurns < 10) {

  }

  else if ((choice1 == answer) && (totalTurns % 2 == 1)) {
    playerOneScore++
    console.log(playerOneScore);
  }
  else if ((choice1 == answer) && (totalTurns % 2 == 0)){
    playerTwoScore++
    console.log(playerTwoScore);
  }
  totalTurns++;
  whoseTurn();
  nextQ();
});

falseButton.click(function() {
  var choice2 = false;

  if (choice2 == answer) {

  }
  else{

  }
  totalTurns++;
  whoseTurn();
  nextQ();
});


});