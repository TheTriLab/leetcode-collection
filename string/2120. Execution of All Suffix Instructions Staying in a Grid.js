// Challenge https://leetcode.com/problems/execution-of-all-suffix-instructions-staying-in-a-grid/description/
// Solution Reference https://leetcode.com/problems/execution-of-all-suffix-instructions-staying-in-a-grid/solutions/4926087/js/

/**
 * @param {number} n
 * @param {number[]} startPos
 * @param {string} s
 * @return {number[]}
 */
var executeInstructions = function(n, startPos, s) {
    let res = [];
    for (let i = 0; i < s.length; i++) {
        let x = 0;
        let [row, col] = startPos;
        for (let j = i; j < s.length; j++) {
            if (s[j] === 'R') col++;
            else if (s[j] === 'L') col--;
            else if (s[j] === 'D') row++;
            else if (s[j] === 'U') row--;
            if (row > n - 1 || col > n - 1 || row < 0 || col < 0) {
                break;
            }
            x++;
        }
        res[i] = x;
    }
    return res;
};