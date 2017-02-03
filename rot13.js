// ROT13 ("rotate by 13 places", sometimes hyphenated ROT-13) 
// is a simple letter substitution cipher that replaces a letter 
// with the letter 13 letters after it in the alphabet. 
// ROT13 is a special case of the Caesar cipher, developed in ancient Rome.

// rot13("EBG13 rknzcyr.") == "ROT13 example."

function rot13(str) {
  let result = '';
  for (let i = 0; i < str.length; i++) {
    let currChar = str.charCodeAt(i);
    let charShiftRight = String.fromCharCode(currChar + 13);
    let charShiftLeft = String.fromCharCode(currChar - 13);
    if (currChar <= 77 && currChar >= 65) {
      result += charShiftRight;
    }
    else if (currChar > 77 && currChar <= 90) {
      result += charShiftLeft;
    }
    else if (currChar <= 109 && currChar >= 97) {
      result += charShiftRight;
    }
    else if (currChar > 109 && currChar <= 122) {
      result += charShiftLeft;
    } 
    else {
      result += str.charAt(i);
    }
  }
  return result;
}