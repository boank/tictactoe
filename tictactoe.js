// JavaScript Document

//if IE4/NS6, apply style

//Clear the board, sets the board to the initial state, all 0s
var square1;
var square2;
var square3;
var square4;
var square5;
var square6;
var square7;
var square8;
var square9;
var square1T = 0;
var square2T = 0;
var square3T = 0;
var square4T = 0;
var square5T = 0;
var square6T = 0;
var square7T = 0;
var square8T = 0;
var square9T = 0;
var moveCount = 0;
var turn = 0;
var mode = 1;

//to get value of each cells
function getVal()
{
	square1 = document.tic.square1.value;
	square2 = document.tic.square2.value;
	square3 = document.tic.square3.value;
	square4 = document.tic.square4.value;
	square5 = document.tic.square5.value;
	square6 = document.tic.square6.value;
	square7 = document.tic.square7.value;
	square8 = document.tic.square8.value;
	square9 = document.tic.square9.value;
}

//check if the player wins
function check()
{
  if(square1 == " X " && square2 == " X " && square3 == " X ")
  {
    alert("You Win!");
    reset();
  } 
  else if(square4 == " X " && square5 == " X " && square6 == " X ")
  {
    alert("You Win!");
    reset();
  } 
  else if(square7 == " X " && square8 == " X " && square9 == " X ")
  {
    alert("You Win!");
    reset();
  }
  else if(square1 == " X " && square5 == " X " && square9 == " X ")
  {
    alert("You Win!");
    reset();
  }
  else if(square1 == " X " && square4 == " X " && square7 == " X ")
  {
    alert("You Win!");
    reset();
  }
  else if(square2 == " X " && square5 == " X " && square8 == " X ")
  {
    alert("You Win!");
    reset();
  }
  else if(square3 == " X " && square6 == " X " && square9 == " X ")
  {
    alert("You Win!");
    reset();
  }
  else if(square1 == " X " && square5 == " X " && square9 == " X ")
  {
    alert("You Win!");
    reset();
  }
  else if(square3 == " X " && square5 == " X " && square7 == " X ")
  {
    alert("You Win!");
    reset();
  }
  else
  {
    winCheck()
    check2()
    drawCheck()  
  } 
}

//check if the computer wins
function check2()
{
  getVal();
  drawCheck();
  if(square1 == " O " && square2 == " O " && square3 == " O ")
  {
    alert("You Lose!");
    reset();
  } 
  else if(square4 == " O " && square5 == " O " && square6 == " O ")
  {
    alert("You Lose!");
    reset();
  } 
  else if(square7 == " O " && square8 == " O " && square9 == " O ")
  {
    alert("You Lose!");
    reset();
  }
  else if(square1 == " O " && square5 == " O " && square9 == " O ")
  {
    alert("You Lose!");
    reset();
  }
  else if(square1 == " O " && square4 == " O " && square7 == " O ")
  {
    alert("You Lose!");
    reset();
  }
  else if(square2 == " O " && square5 == " O " && square8 == " O ")
  {
    alert("You Lose!");
    reset();
  }
  else if(square3 == " O " && square6 == " O " && square9 == " O ")
  {
    alert("You Lose!");
    reset();
  }
  else if(square1 == " O " && square5 == " O " && square9 == " O ")
  {
    alert("You Lose!");
    reset();
  }
  else if(square3 == " O " && square5 == " O " && square7 == " O ")
  {
    alert("You Lose!");
    reset();
  }
}

// check if the game draw
function drawCheck()
{
  getVal();
  moveCount = square1T + square2T + square3T + square4T + square5T + square6T + square7T + square8T + square9T 
  if(moveCount == 9)
  {
    reset();
    alert("Draw");
  }
}

//Check the board and make the computer to win
function winCheck()
{
  check2();
  if(square1 == " O " && square2 == " O " && square3T == 0 && turn == 1)
  {
    document.tic.square3.value = " O ";
    square3T = 1;
    turn = 0;
  }
  else if(square2 == " O " && square3 == " O " && square1T == 0 && turn == 1)
  {
    document.tic.square1.value = " O ";
    square1T = 1;
    turn = 0;
  }
  else if(square4 == " O " && square5 == " O " && square6T == 0 && turn == 1)
  {
    document.tic.square6.value = " O ";
    square6T = 1;
    turn = 0;
  }
  else if(square5 == " O " && square6 == " O " && square4T == 0 && turn == 1)
  {
    document.tic.square4.value = " O ";
    square4T = 1;
    turn = 0;
  }
  else if(square7 == " O " && square8 == " O " && square9T == 0 && turn == 1)
  {
    document.tic.square9.value = " O ";
    square9T = 1;
    turn = 0;
  }
  else if(square8 == " O " && square9 == " O " && square7T == 0 && turn == 1)
  {
    document.tic.square7.value = " O ";
    square7T = 1;
    turn = 0;
  }
  else if(square1 == " O " && square5 == " O " && square9T == 0 && turn == 1)
  {
    document.tic.square9.value = " O ";
    square9T = 1;
    turn = 0;
  }
  else if(square5 == " O " && square9 == " O " && square1T == 0 && turn == 1)
  {
    document.tic.square1.value = " O ";
    square1T = 1;
    turn = 0;
  }
  else if(square3 == " O " && square5 == " O " && square7T == 0 && turn == 1)
  {
    document.tic.square7.value = " O ";
    square7T = 1;
    turn = 0;
  }
  else if(square7 == " O " && square5 == " O " && square3T == 0 && turn == 1)
  {
    document.tic.square3.value = " O ";
    square3T = 1;
    turn = 0;
  }
  else if(square1 == " O " && square3 == " O " && square2T == 0 && turn == 1)
  {
    document.tic.square2.value = " O ";
    square2T = 1;
    turn = 0;
  }
  else if(square4 == " O " && square6 == " O " && square5T == 0 && turn == 1)
  {
    document.tic.square5.value = " O ";
    square5T = 1;
    turn = 0;
  }
  else if(square7 == " O " && square9 == " O " && square8T == 0 && turn == 1)
  {
    document.tic.square8.value = " O ";
    square8T = 1;
    turn = 0;
  }
  else if(square1 == " O " && square7 == " O " && square4T == 0 && turn == 1)
  {
    document.tic.square4.value = " O ";
    square4T = 1;
    turn = 0;
  }
  else if(square2 == " O " && square8 == " O " && square5T == 0 && turn == 1)
  {
    document.tic.square5.value = " O ";
    square5T = 1;
    turn = 0;
  }
  else if(square3 == " O " && square9 == " O " && square6T == 0 && turn == 1)
  {
    document.tic.square6.value = " O ";
    square6T = 1;
    turn = 0;
  }
  else if(square1 == " O " && square5 == " O " && square9T == 0 && turn == 1)
  {
    document.tic.square9.value = " O ";
    square9T = 1;
    turn = 0;
  }
  else if(square4 == " O " && square7 == " O " && square1T == 0 && turn == 1)
  {
    document.tic.square1.value = " O ";
    square1T = 1;
    turn = 0;
  }
  else if(square5 == " O " && square8 == " O " && square2T == 0 && turn == 1)
  {

    document.tic.square2.value = " O ";
    square2T = 1;
    turn = 0;
  }
  else if(square6 == " O " && square9 == " O " && square3T == 0 && turn == 1)
  {
    document.tic.square3.value = " O ";
    square3T = 1;
    turn = 0;
  }
  else if(square1 == " O " && square4 == " O " && square7T == 0 && turn == 1)
  {
    document.tic.square7.value = " O ";
    square7T = 1;
    turn = 0;
  }
  else if(square2 == " O " && square5 == " O " && square8T == 0 && turn == 1)
  {
    document.tic.square8.value = " O ";
    square8T = 1;
    turn = 0;
  }
  else if(square3 == " O " && square6 == " O " && square9T == 0 && turn == 1)
  {
    document.tic.square9.value = " O ";
    square9T = 1;
    turn = 0;
  }
  else if(square1 == " O " && square9 == " O " && square5T == 0 && turn == 1)
  {
    document.tic.square5.value = " O ";
    square5T = 1;
    turn = 0;
  }
  else if(square3 == " O " && square7 == " O " && square5T == 0 && turn == 1)
  {
    document.tic.square5.value = " O ";
    square5T = 1;
    turn = 0;
  }
  else
  {
    computer();
  }
  check2();
}

//compute for the computer's next move
function computer()
{
  check2();
  if(square1 == " X " && square2 == " X " && square3T == 0 && turn == 1)
  {
    document.tic.square3.value = " O ";
    square3T = 1;
    turn = 0;
  }
  else if(square2 == " X " && square3 == " X " && square1T == 0 && turn == 1)
  {
    document.tic.square1.value = " O ";
    square1T = 1;
    turn = 0;
  }
  else if(square4 == " X " && square5 == " X " && square6T == 0 && turn == 1)
  {
    document.tic.square6.value = " O ";
    square6T = 1;
    turn = 0;
  }
  else if(square5 == " X " && square6 == " X " && square4T == 0 && turn == 1)
  {
    document.tic.square4.value = " O ";
    square4T = 1;
    turn = 0;
  }
  else if(square7 == " X " && square8 == " X " && square9T == 0 && turn == 1)
  {
    document.tic.square9.value = " O ";
    square9T = 1;
    turn = 0;
  }
  else if(square8 == " X " && square9 == " X " && square7T == 0 && turn == 1)
  {
    document.tic.square7.value = " O ";
    square7T = 1;
    turn = 0;
  }
  else if(square1 == " X " && square5 == " X " && square9T == 0 && turn == 1)
  {
    document.tic.square9.value = " O ";
    square9T = 1;
    turn = 0;
  }
  else if(square5 == " X " && square9 == " X " && square1T == 0 && turn == 1)
  {
    document.tic.square1.value = " O ";
    square1T = 1;
    turn = 0;
  }
  else if(square3 == " X " && square5 == " X " && square7T == 0 && turn == 1)
  {
    document.tic.square7.value = " O ";
    square7T = 1;
    turn = 0;
  }
  else if(square7 == " X " && square5 == " X " && square3T == 0 && turn == 1)
  {
    document.tic.square3.value = " O ";
    square3T = 1;
    turn = 0;
  }
  else if(square1 == " X " && square3 == " X " && square2T == 0 && turn == 1)
  {
    document.tic.square2.value = " O ";
    square2T = 1;
    turn = 0;
  }
  else if(square4 == " X " && square6 == " X " && square5T == 0 && turn == 1)
  {
    document.tic.square5.value = " O ";
    square5T = 1;
    turn = 0;
  }
  else if(square7 == " X " && square9 == " X " && square8T == 0 && turn == 1)
  {
    document.tic.square8.value = " O ";
    square8T = 1;
    turn = 0;
  }
  else if(square1 == " X " && square7 == " X " && square4T == 0 && turn == 1)
  {
    document.tic.square4.value = " O ";
    square4T = 1;
    turn = 0;
  }
  else if(square2 == " X " && square8 == " X " && square5T == 0 && turn == 1)
  {
    document.tic.square5.value = " O ";
    square5T = 1;
    turn = 0;
  }
  else if(square3 == " X " && square9 == " X " && square6T == 0 && turn == 1)
  {
    document.tic.square6.value = " O ";
    square6T = 1;
    turn = 0;
  }
  else if(square1 == " X " && square5 == " X " && square9T == 0 && turn == 1)
  {
    document.tic.square9.value = " O ";
    square9T = 1;
    turn = 0;
  }
  else if(square4 == " X " && square7 == " X " && square1T == 0 && turn == 1)
  {
    document.tic.square1.value = " O ";
    square1T = 1;
    turn = 0;
  }
  else if(square5 == " X " && square8 == " X " && square2T == 0 && turn == 1)
  {
    document.tic.square2.value = " O ";
    square2T = 1;
    turn = 0;
  }
  else if(square6 == " X " && square9 == " X " && square3T == 0 && turn == 1)
  {
    document.tic.square3.value = " O ";
    square3T = 1;
    turn = 0;
  }
  else if(square1 == " X " && square4 == " X " && square7T == 0 && turn == 1)
  {
    document.tic.square7.value = " O ";
    square7T = 1;
    turn = 0;
  }
  else if(square2 == " X " && square5 == " X " && square8T == 0 && turn == 1)
  {
    document.tic.square8.value = " O ";
    square8T = 1;
    turn = 0;
  }
  else if(square3 == " X " && square6 == " X " && square9T == 0 && turn == 1)
  {
    document.tic.square9.value = " O ";
    square9T = 1;
    turn = 0;
  }
  else if(square1 == " X " && square9 == " X " && square5T == 0 && turn == 1)
  {
    document.tic.square5.value = " O ";
    square5T = 1;
    turn = 0;
  }
  else if(square3 == " X " && square7 == " X " && square5T == 0 && turn == 1)
  {
    document.tic.square5.value = " O ";
    square5T = 1;
    turn = 0;
  }
  else
  {
    AI();
  }
  check2();
}

//set the computer first move
function AI()
{
  getVal()
  if(document.tic.square5.value == "     " && turn == 1)
  {
    document.tic.square5.value = " O ";
    turn = 0;
    square5T = 1;
  }
  else if(document.tic.square1.value == "     " && turn == 1)
  {
    document.tic.square1.value = " O ";
    turn = 0;
    square1T = 1;
  }
  else if(document.tic.square9.value == "     " && turn == 1)
  {
    document.tic.square9.value = " O ";
    turn = 0;
    square9T = 1;
  }
  else if(document.tic.square6.value == "     " && turn == 1)
  {
    document.tic.square6.value = " O ";
    turn = 0;
    square6T = 1;
  }
  else if(document.tic.square2.value == "     " && turn == 1)
  {
    document.tic.square2.value = " O ";
    turn = 0;
    square2T = 1;
  }
  else if(document.tic.square8.value == "     " && turn == 1)
  {
    document.tic.square8.value = " O ";
    turn = 0;
    square8T = 1;
  }
  else if(document.tic.square3.value == "     " && turn == 1)
  {
    document.tic.square3.value = " O ";
    turn = 0;
    square3T = 1;
  }
  else if(document.tic.square7.value == "     " && turn == 1)
  {
    document.tic.square7.value = " O ";
    turn = 0;
    square7T = 1;
  }
  else if(document.tic.square4.value == "     " && turn == 1)
  {
    document.tic.square4.value = " O ";
    turn = 0;
    square4T = 1;
  }
  check2();
}


//reset the board
function reset()
{
  document.tic.square1.value = "     ";
  document.tic.square2.value = "     ";
  document.tic.square3.value = "     ";
  document.tic.square4.value = "     ";
  document.tic.square5.value = "     ";
  document.tic.square6.value = "     ";
  document.tic.square7.value = "     ";
  document.tic.square8.value = "     ";
  document.tic.square9.value = "     ";
  square1T = 0;
  square2T = 0;
  square3T = 0;
  square4T = 0;
  square5T = 0;
  square6T = 0;
  square7T = 0;
  square8T = 0;
  square9T = 0;
  getVal();
  turn = 0;
  moveCount = 0;
}

//call reset function
function resetter()
{
  reset();
}

//function if the player clicks the 1st square
function doOnSquare1 () {
	if (document.tic.square1.value == '     ' && turn == 0 && mode == 1) { 
		document.tic.square1.value = ' X '; 
		square1T = 1; 
		turn = 1; 
		getVal(); 
		check();
	} else if (document.tic.square1.value == '     ' && turn == 1 && mode == 2) {
		document.tic.square1.value = ' X '; 
		square1T = 1; 
		turn = 0; 
		getVal(); 
		check();
	} else if (document.tic.square1.value == '     ' && turn == 0 && mode == 2) {
		document.tic.square1.value = ' O '; 
		square1T = 1; 
		turn = 1; 
		getVal(); 
		check();
	} 
	drawCheck();	
}

//function if the player clicks the 2nd square
function doOnSquare2 () {
	if(document.tic.square2.value == '     ' && turn == 0 && mode == 1) {
		document.tic.square2.value = ' X '; 
		square2T = 1; 
		turn = 1; 
		getVal(); 
		check();
	} else if (document.tic.square2.value == '     ' && turn == 1 && mode == 2) {
		document.tic.square2.value = ' X '; 
		square2T = 1; 
		turn = 0; 
		getVal(); 
		check();
	} else if (document.tic.square2.value == '     ' && turn == 0 && mode == 2) {
		document.tic.square2.value = ' O '; 
		square2T = 1; 
		turn = 1; 
		getVal(); 
		check();
	} 
	drawCheck();
}

//function if the player clicks the 3rd square
function doOnSquare3 () {
	if(document.tic.square3.value == '     ' && turn == 0 && mode == 1) {
		document.tic.square3.value = ' X '; 
		square3T = 1; 
		turn = 1; 
		getVal(); 
		check();
	} else if (document.tic.square3.value == '     ' && turn == 1 && mode == 2) {
		document.tic.square3.value = ' X '; 
		square3T = 1; 
		turn = 0; 
		getVal(); 
		check();
	} else if (document.tic.square3.value == '     ' && turn == 0 && mode == 2) {
		document.tic.square3.value = ' O '; 
		square3T = 1; 
		turn = 1; 
		getVal(); 
		check();
	} 
	drawCheck();
}

//function if the player clicks the 4th square
function doOnSquare4 () {
	if(document.tic.square4.value == '     ' && turn == 0 && mode == 1) {
		document.tic.square4.value = ' X '; 
		square4T = 1; 
		turn = 1; 
		getVal(); 
		check();
	} else if (document.tic.square4.value == '     ' && turn == 1 && mode == 2) {
		document.tic.square4.value = ' X '; 
		square4T = 1; 
		turn = 0; 
		getVal(); 
		check();
	} else if (document.tic.square4.value == '     ' && turn == 0 && mode == 2) {
		document.tic.square4.value = ' O '; 
		square4T = 1; 
		turn = 1; 
		getVal(); 
		check();
	} 
	drawCheck();
}

//function if the player clicks the 5th square
function doOnSquare5 () {
	if(document.tic.square5.value == '     ' && turn == 0 && mode == 1) {
		document.tic.square5.value = ' X '; 
		square5T = 1; 
		turn = 1; 
		getVal(); 
		check();
	} else if (document.tic.square5.value == '     ' && turn == 1 && mode == 2) {
		document.tic.square5.value = ' X '; 
		square5T = 1; 
		turn = 0; 
		getVal(); 
		check();
	} else if (document.tic.square5.value == '     ' && turn == 0 && mode == 2) {
		document.tic.square5.value = ' O '; 
		square5T = 1; 
		turn = 1; 
		getVal(); 
		check();
	} 
	drawCheck();
}

//function if the player clicks the 6th square
function doOnSquare6 () {
	if(document.tic.square6.value == '     ' && turn == 0 && mode == 1) {
		document.tic.square6.value = ' X '; 
		square6T = 1; 
		turn = 1; 
		getVal(); 
		check();
	} else if (document.tic.square6.value == '     ' && turn == 1 && mode == 2) {
		document.tic.square6.value = ' X '; 
		square6T = 1; 
		turn = 0; 
		getVal(); 
		check();
	} else if (document.tic.square6.value == '     ' && turn == 0 && mode == 2) {
		document.tic.square6.value = ' O '; 
		square6T = 1; 
		turn = 1; 
		getVal(); 
		check();
	} 
	drawCheck();
}

//function if the player clicks the 7th square
function doOnSquare7 () {
	if(document.tic.square7.value == '     ' && turn == 0 && mode == 1) {
		document.tic.square7.value = ' X '; 
		square7T = 1; 
		turn = 1; 
		getVal(); 
		check();
	} else if (document.tic.square7.value == '     ' && turn == 1 && mode == 2) {
		document.tic.square7.value = ' X '; 
		square7T = 1; 
		turn = 0; 
		getVal(); 
		check();
	} else if (document.tic.square7.value == '     ' && turn == 0 && mode == 2) {
		document.tic.square7.value = ' O '; 
		square7T = 1; 
		turn = 1; 
		getVal(); 
		check();
	} 
	drawCheck();
}

//function if the player clicks the 8th square
function doOnSquare8 () {
	if(document.tic.square8.value == '     ' && turn == 0 && mode == 1) {
		document.tic.square8.value = ' X '; 
		square8T = 1; 
		turn = 1; 
		getVal(); 
		check();
	} else if (document.tic.square8.value == '     ' && turn == 1 && mode == 2) {
		document.tic.square8.value = ' X '; 
		square8T = 1; 
		turn = 0; 
		getVal(); 
		check();
	} else if (document.tic.square8.value == '     ' && turn == 0 && mode == 2) {
		document.tic.square8.value = ' O '; 
		square8T = 1; 
		turn = 1; 
		getVal(); 
		check();
	} 
	drawCheck();
}

//function if the player clicks the 9th square
function doOnSquare9 () {
	if(document.tic.square9.value == '     ' && turn == 0 && mode == 1) {
		document.tic.square9.value = ' X '; 
		square9T = 1; 
		turn = 1; 
		getVal(); 
		check();
	} else if (document.tic.square9.value == '     ' && turn == 1 && mode == 2) {
		document.tic.square9.value = ' X '; 
		square9T = 1; 
		turn = 0; 
		getVal(); 
		check();
	} else if (document.tic.square9.value == '     ' && turn == 0 && mode == 2) {
		document.tic.square9.value = ' O '; 
		square9T = 1; 
		turn = 1; 
		getVal(); 
		check();
	} 
	drawCheck();
}