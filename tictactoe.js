
// Tic Tac Toe Game

$(document).ready(function(){

var turn = 1;
  $('#matrix td').click(function(){
    if (turn < 10) {

      if (turn % 2 === 0) {
        $(this).text('O');
      } else { 
        $(this).text('X');   
      }
    turn++;
    checkWin();
    }
  });

var winCondition = ["1", "2", "3", "4", "5", "6", "7", "8"];

function checkWin() {
  for (var i = 0; i < winCondition.length; i++) {
    
    var cellValue = $('.' + winCondition[i]).map(function(){
      return $(this).text();
    });
    console.log(cellValue);

    if (cellValue[0] == "X" && cellValue[1] == "X" && cellValue[2] == "X") {
      alert("x wins!");
      resetMatrix();

    } else if (cellValue[0] == "O" && cellValue[1] == "O" && cellValue[2] == "O") {
      alert("O wins!");
      resetMatrix();
    } else if (turn === 10) {
      alert("tied!");
      resetMatrix();
    } 
  }
}

function resetMatrix() {
  turn = 1;
  $('td').empty();
}

});










// // JS-only code (wrong)

// // Creating Matrix
// var matrix = [["*", "*", "*"], ["*", "*", "*"], ["*", "*", "*"]];

// // Prints the Matrix

// function printMatrix() {
//   for (var i = 0; i < 3; i++) {

//     for (var j = 0; j < 3; j ++) {
//      document.write(matrix[i][j]);
//     }
//     document.writeln("<br>");
//   }
//     console.log();
// }

// // Prompt players to enter matrix[][] values

// var i = 1;

// while (i < 10) {
//   var row = prompt("Row: ");
//   var col = prompt("Column: ");

//   if (matrix[row][col] === "X" || matrix[row][col] === "O") {

//     alert("This spot is already taken");

//     } else {

//     if (i % 2 === 0) {
//       matrix[row][col] = "O"
//       } else {
//       matrix[row][col] = "X";
//     }
//   }

//   printMatrix();
  
//   i++;
// }

// function checkWin() {
  
// }



