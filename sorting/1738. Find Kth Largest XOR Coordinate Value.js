// Challenge https://leetcode.com/problems/find-kth-largest-xor-coordinate-value/description/
// Solution Reference https://leetcode.com/problems/find-kth-largest-xor-coordinate-value/solutions/4793508/js-solution-by-bharadwaj/

/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
var kthLargestValue = function(matrix, k) {
    let x = matrix.length;
    let y = matrix[0].length;
    let values = Array(x + 1).fill('').map(_ => Array(y + 1).fill(0));
    let res = [];

    for (let row = 1; row <= x; row++) {
        for (let col = 1; col <= y; col++) {
            values[row][col] = matrix[row - 1][col - 1] ^
                values[row - 1][col] ^
                values[row][col - 1] ^
                values[row - 1][col - 1];

            res.push(values[row][col]);
        }
    }
    res.sort((a, b) => b - a);
    return res[k - 1];
};