// Challenge https://leetcode.com/problems/find-the-difference/description/
// Solution Reference https://leetcode.com/problems/find-the-difference/solutions/4086497/94-54-efficient-algorithms-for-finding-the-added-letter-in-a-shuffled-string/

/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
    let result = 0
    for (let i = 0; i < s.length; i++) {
        result ^= s.charCodeAt(i)
    }
    for (let i = 0; i < t.length; i++) {
        result ^= t.charCodeAt(i)
    }
    return String.fromCharCode(result)
};