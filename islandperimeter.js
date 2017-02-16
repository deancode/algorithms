// Problem: https://leetcode.com/problems/island-perimeter/
// Author: Dean Edwards
// Date: 02-15-17

/**
 * @param {number[][]} grid
 * @return {number}
 */
function islandPerimeter(grid) {
    const rowLen = grid.length;
    const colLen = grid[0].length;
    let perimeter = 0;
    
    for (let r = 0; r < rowLen; r++) {
        for (let c = 0; c < colLen; c++) {
          if (grid[r][c] === 1) {
              perimeter += getPerimeter(r, c);
          }
        }
    }
    
    return perimeter;
    
    function getPerimeter(r, c) {
        let count = 4;
        if (r - 1 >= 0 && r - 1 < rowLen) {
            if (grid[r - 1][c] === 1) {
                count--;
            }
        }
        if (r + 1 >= 0 && r + 1 < rowLen) {
            if (grid[r + 1][c] === 1) {
                count--;
            }
        }
        if (c - 1 >= 0 && c - 1 < colLen) {
            if (grid[r][c - 1] === 1) {
                count--;
            }
        }
        if (c + 1 >= 0 && c + 1 < colLen) {
            if (grid[r][c + 1] === 1) {
               count--; 
            }
        }
        return count;
    }
};