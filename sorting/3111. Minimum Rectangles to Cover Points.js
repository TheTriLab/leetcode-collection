// Challenge https://leetcode.com/problems/minimum-rectangles-to-cover-points/description/
// Solution Reference https://leetcode.com/problems/minimum-rectangles-to-cover-points/solutions/5018730/very-easy-beginner-friendly-js-solution-fully-explained/

/**
 * @param {number[][]} points
 * @param {number} w
 * @return {number}
 */
var minRectanglesToCoverPoints = function(points, w) {
    let val = [];
    for (let i = 0; i < points.length; i++) {
        val.push(points[i][0]);
    }
    val.sort((a, b) => a - b);
    let count = 1;
    let mini = val[0];
    for (let i = 1; i < val.length; i++) {
        if (val[i] - mini > w) {
            mini = val[i];
            count++;
        }
    }

     return count;
};