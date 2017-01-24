// Write an algorithm that takes an array and moves all of the zeros to the end, 
// preserving the order of the other elements.

var moveZeros = function (arr) {
  const result = [];
  const zeroes = [];
  
  arr.forEach(ele => ele === 0 ? zeroes.push(ele) : result.push(ele));
 
  return result.concat(zeroes);
}