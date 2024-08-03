// Challenge https://leetcode.com/problems/partition-labels/description/
// Solution Reference https://leetcode.com/problems/partition-labels/solutions/3063271/js-o-n-hash-greedy/

/**
 * @param {string} s
 * @return {number[]}
 */
var partitionLabels = function(s, lastIdx = {}) {
    for (let i = 0; i < s.length; i++) {
      lastIdx[s[i]] = i;
    }
    let curLast = 0, res = [], accu = 0;
    for (let i = 0; i < s.length; i++) {
      curLast = Math.max(curLast, lastIdx[s[i]]);
      if (i === curLast) {
        res.push(i + 1 - accu);
        accu = i + 1;
      }
    }
    return res;
  };