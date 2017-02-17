// Source: https://leetcode.com/problems/nim-game/
// Author: Dean Edwards;
// Date: 02-16-17

/**
 * @param {number} n
 * @return {boolean}
 */

var canWinNim = function(n) {
    if (n < 4) return true;
    return n % 4 !== 0;
};

// All multiples of 4 are losing positions. All other numbers are winning positions.