/*
Given an 2D board, count how many battleships are in it. The battleships are represented with 'X's, empty slots are represented with '.'s. You may assume the following rules:

You receive a valid board, made of only battleships or empty slots.
Battleships can only be placed horizontally or vertically. In other words, they can only be made of the shape 1xN (1 row, N columns) or Nx1 (N rows, 1 column), where N can be of any size.
At least one horizontal or vertical cell separates between two battleships - there are no adjacent battleships.

example:
X..X
...X
...X
count: 2

invalid example:
...X
XXXX
...X

This is an invalid board that you will not receive - as battleships will always have a cell separating between them.
*/

/**
 * @param {character[][]} board
 * @return {number}
 */
function countBattleships(board) {
    let count = 0;
    const rowLen = board.length;
    const colLen = board[0].length;
    
    for (let r = 0; r < rowLen; r++) {
        for (let c = 0; c < colLen; c++) {
          if (board[r][c] === 'X') {
              count++;
              removeBattleship(r, c);
          }
        }
    }
    // recursively removes all surrounding battleships so it won't be counted again.
    function removeBattleship(r, c) {
        if (r - 1 >= 0 && r - 1 < rowLen) {
            if (board[r - 1][c] === 'X') {
                board[r - 1][c] = '.';
                removeBattleship(r - 1, c);
            }
        }
        if (r + 1 >= 0 && r + 1 < rowLen) {
            if (board[r + 1][c] === 'X') {
                board[r + 1][c] = '.';
                removeBattleship(r + 1, c);
            }
        }
        if (c - 1 >= 0 && c - 1 < colLen) {
            if (board[r][c - 1] === 'X') {
                board[r][c - 1] = '.';
                removeBattleship(r, c - 1);
            }
        }
        if (c + 1 >= 0 && c + 1 < colLen) {
            if (board[r][c + 1] === 'X') {
                board[r][c + 1] = '.';
                removeBattleship(r, c + 1);
            }
        }
    }
    return count;
};
