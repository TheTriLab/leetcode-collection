// Challenge https://leetcode.com/problems/word-pattern/description/
// Solution Reference https://leetcode.com/problems/word-pattern/solutions/5445704/solution-by-dare2solve-detailed-explanation-clean-code/

/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function(pattern, s) {
    const charToWord = new Map();
    const wordToChar = new Map();
    const words = s.split(' ');
    let i = 0;
    for (const word of words) {
        if (i === pattern.length) {
            return false;
        }
        const currentChar = pattern[i];
        if (!charToWord.has(currentChar) && !wordToChar.has(word)) {
            charToWord.set(currentChar, word);
            wordToChar.set(word, currentChar);
        } else {
            if (charToWord.get(currentChar) !== word || wordToChar.get(word) !== currentChar) {
                return false;
            }
        }
        ++i;
    }
    return i === pattern.length;
};