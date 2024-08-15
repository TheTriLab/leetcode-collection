// Challenge https://leetcode.com/problems/clear-digits/description/
// Solution Reference https://leetcode.com/problems/clear-digits/solutions/5382883/solution-by-dare2solve-detailed-explanation-o-n/

/**
 * @param {string} s
 * @return {string}
 */
var clearDigits = function(s) {
    let stack = [];
    for (let i = 0; i < s.length; i++) {
        if ('0123456789'.indexOf(s[i]) < 0) {
            stack.push(s[i]);
        } else {
            stack.pop();
        }
    }
    return stack.join('');
};