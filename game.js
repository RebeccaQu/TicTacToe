
// Tic Tac Toe Game

// Creating the Matrix

var matrix = [["*", "*", "*"], ["*", "*", "*"], ["*", "*", "*"]];

// Prints the Matrix

function printMatrix() {
  for (var i = 0; i < 3; i++) {

    for (var j = 0; j < 3; j ++) {
     document.write(matrix[i][j]);
    }
    document.writeln("<br>");
  }
    console.log();
}

// Prompt players to enter matrix[][] values

var i = 1;

while (i < 10) {
  var row = prompt("Row: ");
  var col = prompt("Column: ");

  if (matrix[row][col] === "X" || matrix[row][col] === "O") {

    alert("This spot is already taken");

    } else {

    if (i % 2 === 0) {
      matrix[row][col] = "O"
      } else {
      matrix[row][col] = "X";
    }
  }

  printMatrix();
  
  i++;
}

function checkWin() {
  
}



