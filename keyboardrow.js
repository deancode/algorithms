/*
Given a List of words, return the words that can be typed using letters of alphabet on only one row's of American keyboard like the image below.
Example 1:
Input: ["Hello", "Alaska", "Dad", "Peace"]
Output: ["Alaska", "Dad"]
*/

/**
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function(words) {
    const topRow = { 'q':'q', 'w':'w', 'e': 'e', 'r':'r', 't':'t', 'y':'y', 'u':'u', 'i':'i', 'o':'o', 'p':'p'};
    const middleRow = { 'a':'a', 's':'s', 'd':'d', 'f':'f', 'g':'g', 'h':'h', 'j':'j', 'k':'k', 'l':'l' };
    const bottomRow = { 'z':'z', 'x':'x', 'c':'c', 'v':'v', 'b':'b', 'n':'n', 'm':'m' };
    return words.filter(word => {
        let valid = true;
        let wordLen = word.length;
        for (let i = 0; i < wordLen; i++) {
            if (!topRow[word[i].toLowerCase()]) {
                valid = false;
                break;
            }
        }
        if (valid) return word;
        valid = true;
        for (let i = 0; i < wordLen; i++) {
            if (!middleRow[word[i].toLowerCase()]) {
                valid = false;
                break;
            }
        }
        if (valid) return word;
        valid = true;
        for (let i = 0; i < wordLen; i++) {
            if (!bottomRow[word[i].toLowerCase()]) {
                valid = false;
                break;
            }
        }
        if (valid) return word;
    });
};