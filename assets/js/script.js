// Use Cases
//
// 1. Players (two of them) submit names
// 2. Start quiz
// 3. Each Player takes turns answering questions which are displayed in no particular sequence.
// 4. After answering by clicking on true or false, view next question
// 5. Players repeat steps 3 and 4 until they"ve reached a total of 10 questions
// 6. The Player with more correct answers, wins!






$(document).ready(function() {

  var playerOne = "";
  var playerTwo = "";
  var playerOneScore = 0;
  var playerTwoScore = 0;
  var playerOneCorrect = 0;
  var playerTwoCorrect = 0;
  var totalTurns = 1;
  var random = 0;
  var question = "";
  var answer = true;
  function Pair(q, a) {
    this.q = q;
    this.a = a;
  }

  // The fun part
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

  // Make an array to hold all the questions and answers
  var qA = [pair1, pair2, pair3, pair4, pair5, pair6, pair7, pair8, pair9, pair10, pair11, pair12, pair13, pair14];


  //1. Create a function to retrieve names submitted by players
  function getPlayerOneName() {
    do {
      playerOne = prompt("Player 1:\nPlease enter your name");
    } while (playerOne === null || playerOne === "");
  }

  function getPlayerTwoName() {
    do {
      playerTwo = prompt("Player 2:\nPlease enter your name");
    } while (playerTwo === null || playerTwo === "");
  }

  // function getPlayerName(playerName) {
  //   do {
  //     playerName = prompt(playerName + ":\nPlease enter your name");
  //   } while (playerName === null || playerName === "");
  // }


  // 2. The real fun part
  // Create a function to record how many times a player has won
  function updateScore() {
    $(".playOne").html(playerOne + " : " + playerOneScore);
    $(".playTwo").html(playerTwo + " : " + playerTwoScore);
  }

  // Create a function to determine whose turn it is and display it
  function whoseTurn() {
    if (totalTurns % 2 === 1) {
      $("h2").html(playerOne + "'s turn");
    } else {
      $("h2").html(playerTwo + "'s turn");
    }
  }

  // Create a function that will pull a random pair of questions and answers; the former to be displayed while the latter to be compared against the player's choice. The function also removes the pair from the array, to prevent repetition in current game.
  function nextQ() {
    // console.log(qA);
    random = Math.floor(Math.random() * qA.length);
    // console.log(random);
    question = qA[random].q;
    answer = qA[random].a;
    qA.splice(random, 1);
    var displayQ = $("#ask");
    displayQ.html(question);
    console.log(qA);
  }


  //3., 4.

  var trueButton = $("#option1");
  var falseButton = $("#option2");


  // MOTHERSHIP
  function gameInit(){
    // put all the functions here
    // initialization
    getPlayerOneName();
    getPlayerTwoName();
    updateScore();
    whoseTurn();
    nextQ();
    $("#option1").html("True");
    $("#option2").html("False");
    // Create a function that will determine whose turn it is, listen for his/her answer, and compare it with the actual answer. If they match, add a point to the respective player. Regardless of aforementioned, function is to include: an addition to the number of turns played, calling of a check win function, refreshing whose turn display, and query display

    trueButton.click(function() {

      if ((true === answer) && (totalTurns % 2 === 1)) {
        playerOneCorrect++;
        console.log("playerOne " + playerOneCorrect);
      } else if ((true === answer) && (totalTurns % 2 === 0)) {
        playerTwoCorrect++;
        console.log("playerTwo " + playerTwoCorrect);
      }
      totalTurns++;
      checkWinner();
      whoseTurn();
      nextQ();
    });

    falseButton.click(function() {

      if ((false === answer) && (totalTurns % 2 === 1)) {
        playerOneCorrect++;
        console.log("playerOne " + playerOneCorrect);
      } else if ((false === answer) && (totalTurns % 2 === 0)) {
        playerTwoCorrect++;
        console.log("playerTwo " + playerTwoCorrect);
      }
      totalTurns++;
      checkWinner();
      whoseTurn();
      nextQ();
    });
  }
  gameInit();


  //5., 6. Create a function that will check who has more correct answers after a total of 10 questions have been asked. Whichever has higher, raise their score by 1. If correct answers are of same quantity, display draw and restart. Regardless of the aforementioned, call functions that update the scoreboard and restart the quiz.
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

  // Create a function that resets values pertaiining to a round of the quiz
  function restart() {
    playerOneCorrect = 0;
    playerTwoCorrect = 0;
    totalTurns = 1;
    qA = [pair1, pair2, pair3, pair4, pair5, pair6, pair7, pair8, pair9, pair10, pair11, pair12, pair13, pair14];
  }


});
