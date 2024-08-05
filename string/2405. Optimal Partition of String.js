// Challenge https://leetcode.com/problems/optimal-partition-of-string/description/
// Solution Reference https://leetcode.com/problems/optimal-partition-of-string/solutions/3378381/simple-js-98-time-complexity/

/**
 * @param {string} s
 * @return {number}
 */
var partitionString = function(s) {
    let count = 1;
    let prevChars = s[0];

    for (let i = 1; i < s.length; i++) {
      if (!prevChars.includes(s[i])) {
        prevChars += s[i];
      } else {
        count++;
        prevChars = s[i];
      }
    }

    return count;
};