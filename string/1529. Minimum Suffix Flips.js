// Challenge https://leetcode.com/problems/minimum-suffix-flips/description/
// Solution Reference https://leetcode.com/problems/minimum-suffix-flips/solutions/4778777/if-you-get-tle-read-this/

/**
 * @param {string} target
 * @return {number}
 */
var minFlips = function(target) {
    let result = 0;
    for (let i = 0; i < target.length; i++) {
        if (result % 2 === 0) {
            if (target[i] == 1) {
                result++;
            }
        } else {
            if (target[i] == 0) {
                result++;
            }
        }
    }
    return result;
};