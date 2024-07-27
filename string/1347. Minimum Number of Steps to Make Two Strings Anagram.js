// Challenge https://leetcode.com/problems/minimum-number-of-steps-to-make-two-strings-anagram/description/
// Solution Reference https://leetcode.com/problems/minimum-number-of-steps-to-make-two-strings-anagram/solutions/4555665/o-n-java-python-javascript-typescript-c-c-character-count/

/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var minSteps = function(s, t) {
    const alphabets = Array(26).fill(0);
    let result = 0;

    for(let index=0; index<s.length; index++){
        alphabets[s.charCodeAt(index) - 'a'.charCodeAt(0)] ++;
        alphabets[t.charCodeAt(index) - 'a'.charCodeAt(0)] --;
    }

    for(let count of alphabets)
        result += Math.max(0, count);

    return result;
};