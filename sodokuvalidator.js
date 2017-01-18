function validSolution(board) {
  let rowSum = 0;
  let colSum = 0;
  let valid = true;
  
  // test if all the 9x9 rows and columns equal 45
  for (let r = 0; r < 9; r++) {
    for (let c = 0; c < 9; c++) {
      rowSum += board[r][c];
      colSum += board[c][r];
    }
    if (rowSum !== 45 || colSum !== 45) return false;
    rowSum = colSum = 0;
  }
  
  // test if all the 3x3 boxes equal 45
  function threeByThree(i, j) {
    let sum = 0;
    for (let r = i; r < i + 3; r++) {
      for (let c = j; c < j + 3; c++) {
        sum += board[r][c];
      }
    }
    if (sum !== 45) valid = false;
  }
  
  for (let i = 0; i < 7; i += 3) {
    threeByThree(i, 0);
    threeByThree(i, 3);
    threeByThree(i, 6);
    if (!valid) return false;
  }
  
  return true;
}