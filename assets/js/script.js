// Use Cases
//
// 1. Players (two of them) submit names
// 2. Start quiz
// 3. Each Player takes turns answering questions which are displayed in no particular sequence.
// 4. After answering by clicking on true or false, view next question
// 5. Players repeat steps 3 and 4 until they"ve reached a total of 10 questions
// 6. The Player with more correct answers, wins!






$(document).ready(function () {

  function Pair(q, a) {
    this.q = q;
    this.a = a;
  }

  var pair1 = new Pair("Questions can be answers?", true);
  var pair2 = new Pair("\"Peter Piper picked a peck of pickled peppers.\"<br><br>Perhaps, philosophically, Peter is a pompous prick and a perpetual kleptomanic.", true);
  var pair3 = new Pair("(typeof \"true\" === \"string\");<br>Returns true.<br> True?<br>hint: Think through.", true);
  var pair4 = new Pair("\"Bacon.\"", true);
  var pair5 = new Pair("According to Led Zeppelin:<br><br>If there is a bustle in your hedgerow, you should not be alarmed.", true);
  var pair6 = new Pair("\"Barny creates quiz,<br>The quiz works and Barny lives,<br>Barny completes 1a.\"<br><br>Is the above a haiku?", false);
  var pair7 = new Pair("Short is shorter than Long if we assume they are both strings and are comparing their length.", false);
  var pair8 = new Pair("Friend or faux?<br>Therein, lies the rub", false);
  var pair9 = new Pair("This quiz, it is good, no?<br>Now now, never suck-up to win!", false);
  var pair10 = new Pair("\"Work it harder, make it better,<br>do it faster, makes us stronger.\"<br><br>Is the official motto of the International Bakers Society.", false);
  //add more questions
  var pair11 = new Pair("The South American branch of General Assembly is located just outside Machu Picchu.", false);
  var pair12 = new Pair("\"Cold War Kids\" is an organisation founded to benefit children involved in \'The Cold War\'.", false);
  var pair13 = new Pair("Cat Power<br>aka<br>Charlyn Marie \"Chan\" Marshall<br>wrote a song called<br>\'The Greatest\'.", true);
  var pair14 = new Pair("\'____ Grit\'<br>is a movie directed, written, produced and edited by the Coen Brothers.", true);

  var qA = [pair1, pair2, pair3, pair4, pair5, pair6, pair7, pair8, pair9, pair10, pair11, pair12, pair13, pair14];


//1.
var playerOne = "";
function getPlayerOneName() {
  do {
    playerOne = prompt("Player 1:\nPlease enter your name");
  } while (playerOne === null || playerOne === "");
}
getPlayerOneName();

playerTwo = "";
function getPlayerTwoName() {
  do {
    playerTwo = prompt("Player 2:\nPlease enter your name");
  } while (playerTwo === null || playerTwo === "");
}
getPlayerTwoName();

// 2.
var playerOneScore = 0;
var playerTwoScore = 0;

function updateScore() {
$(".playOne").html(playerOne + " : " + playerOneScore);
$(".playTwo").html(playerTwo + " : " + playerTwoScore);
}updateScore();

$("#option1").html("True");
$("#option2").html("False");

var totalTurns = 1;

function whoseTurn() {
  if (totalTurns % 2 === 1) {
    $("h2").html(playerOne + "'s turn");
  }
  else {
    $("h2").html(playerTwo + "'s turn");
  }
}
whoseTurn();

var random = 0;
var question = "";
var answer = true;

function nextQ() {
  console.log(qA);
 random = Math.floor(Math.random() * qA.length);
 console.log(random);
 question = qA[random].q;
 answer = qA[random].a;
 qA.splice(random, 1);
 var displayQ = $("#ask");
 displayQ.html(question);
}nextQ();

//3., 4.
var playerOneCorrect = 0;
var playerTwoCorrect = 0;
var trueButton = $("#option1");
var falseButton = $("#option2");

trueButton.click(function() {

  if ((true === answer) && (totalTurns % 2 === 1)) {
    playerOneCorrect++;
    console.log("playerOne "+ playerOneCorrect);
  }
  else if ((true === answer) && (totalTurns % 2 === 0)) {
    playerTwoCorrect++;
    console.log("playerTwo "+ playerTwoCorrect);
  }
  totalTurns++;
  checkWinner();
  whoseTurn();
  nextQ();
});

falseButton.click(function() {

  if ((false === answer) && (totalTurns % 2 === 1)) {
    playerOneCorrect++;
    console.log("playerOne "+ playerOneCorrect);
  }
  else if ((false === answer) && (totalTurns % 2 === 0)){
    playerTwoCorrect++;
    console.log("playerTwo "+ playerTwoCorrect);
  }
  totalTurns++;
  checkWinner();
  whoseTurn();
  nextQ();

});


//5., 6.
function checkWinner() {
  if (totalTurns > 10) {
    if (playerOneCorrect === playerTwoCorrect) {
      alert("DEUCE");
      restart();
    } else if (playerOneCorrect > playerTwoCorrect) {
      alert(playerOne + " wins!");
      playerOneScore++;
    } else {
      alert(playerTwo + " wins!");
      playerTwoScore++;
    }
    updateScore();
    restart();
  }
}

function restart() {
  playerOneCorrect = 0;
  playerTwoCorrect = 0;
  totalTurns = 1;
  qA = [pair1, pair2, pair3, pair4, pair5, pair6, pair7, pair8, pair9, pair10];
}



});
