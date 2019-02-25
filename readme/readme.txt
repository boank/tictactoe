This document specifies the design of a tic-tac-toe playing program.

1. The program will be played by a single user, playing against the computer.
2. The input will be via the mouse click, and the output will be on the UI.

How to run the program:
=======================
1. Just open index.html file on your browser

Rules of tic-tac-toe:
Tic-tac-toe is played on a 3x3 grid consisting of 9 cells.  The cells are initially empty.  
Players take turns placing X mark (one player) and O mark (the computer) until either the board is full, in which case the game is a draw, or until one player has placed three Xs or Os in a row, either horizontally, vertically, or diagonally.

Program explaination
====================
Data:
1. Board - The tic-tac-toe board
   - represented as a 3x3 array of integers
   - 0 represents an empty cell, 1 represents the move

2. Turn - Whose turn it is to play
   - represented as an integer
   - either 1 or 0 depending upon whether it is the user's turn or the computer's turn

Operations:
1. reset(board)
   - Description: a function that sets the board to the initial state, all 0s.  
   - Input: a board
   - Output: nothing

2. move doOnSquareX()
   - Description: a function that gets a move from the user when click on the X square
   - Input: mouse click
   - Output: a move
   - result: one move has been gotten from the user

3. move computer(board)
   - Description: a function that computes the computer's move
   - Input: the board
   - Output: a move
   - result: the computer has made one move

4. integer wincheck(board)
   - Description: Checks to see if anyone won the game
   - Input: the board
   - Output: alert message, depending on whether the user, nobody, or the computer won the game
   - Result: a winner (if present) is determined

5. boolean drawcheck(board)
   - Description: Checks to see if the board is full and no winner
   - Input: The board
   - Output: true or false depending on whether or not the board is full
   - Result: the fullness of the board has been checked


Algorithms:
Tic-Tac-Toe Game algorithm:
1. Clear the board.
2. The user makes the first move
3. Input the response and set turn to the appropriate value
4. While drawcheck(board) = false and wincheck(board) = 0
5. display board(board)
6. If turn = 1
7.   move := doOnSquareX(board)
8. Otherwise
9.   move := computer(board)
10. wincheck(board, move)
11. Swap turn 
12. End If
13. Print out the value of check_winner, either user, computer, or draw, depending on whether wincheck(board) returns.


Algorithm for get_computer_move():
1. If there is a move that would give the computer three in a row, 
   return that move.

2. Otherwise, if the user has two in a row, return the move that the
   user would play to get three in a row.

3. Otherwise, if there is a move that would give the user two sets of
   two in a row, return that move.

4. Otherwise, if the center cell is open, return that move.

5. Otherwise, if there is a move that would give the computer two in a
   row, return that move.

6. Otherwise, if a corner cell is open, return that move.

7. Otherwise, play in any other cell.


Algorithm for wincheck():
1. If possible three in a row

2.    Check the cells

3.    If the user has won
 
4.        alert 'You win'

5     If the computer has won

6.        alert 'You lose'

7. End if

8. alert "draw'  // nobody has won

