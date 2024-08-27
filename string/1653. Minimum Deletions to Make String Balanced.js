// Challenge https://leetcode.com/problems/minimum-deletions-to-make-string-balanced/description/
// Solution Reference https://leetcode.com/problems/minimum-deletions-to-make-string-balanced/solutions/5557296/easiest-approach-9-lines-of-code-cpp-java-python-c-javascript/

/**
 * @param {string} s
 * @return {number}
 */
var minimumDeletions = function(s) {
    let count_a = 0, count_b = 0;
    for (let i of s) {
        count_a += (i === 'a') ? 1 : 0;
    }
    let curr_a = 0, curr_b = 0;
    let del = Number.MAX_SAFE_INTEGER;
    for (let i of s) {
        del = Math.min(del, (count_a - curr_a) + curr_b);
        curr_a += (i === 'a') ? 1 : 0;
        curr_b += (i === 'a') ? 0 : 1;
    }
    return Math.min(del, (count_a - curr_a) + curr_b);
};