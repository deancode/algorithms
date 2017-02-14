/**
 * @param {number} x
 * @param {number} y
 * @return {number} 
 */
// The Hamming distance between two integers is the number of position at which the corresponding bits are different.
// Given two integers x and y, calculate the Hamming distance given 0 <= x, y < 2^31

// Input : x = 1, y = 4
// Output : 2

function hammingDistance(x, y) {
  let val = x ^ y; // bitwise XOR
  let dist;
  for (dist = 0; val > 0; dist++) {
    val &= val - 1;
  }
  return dist;
}
