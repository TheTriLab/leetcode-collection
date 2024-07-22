// Challenge https://leetcode.com/problems/minimum-time-difference/description/
// Solution Reference https://leetcode.com/problems/minimum-time-difference/solutions/1559816/83-javascript-solution-n-log-n-sort-and-1-loop/

/**
 * @param {string[]} timePoints
 * @return {number}
 */
var findMinDifference = function(timePoints) {
    timePoints.sort();
    timePoints = timePoints.map(el => {
        let [hours, minutes] = el.split(':');
        return Number(hours) * 60 + Number(minutes);
    })
    
    timePoints.push(timePoints[0] + 1440);
    let minDiff = Infinity;
    for (let i = 1; i < timePoints.length; i ++) {
        minDiff = Math.min(minDiff, timePoints[i] - timePoints[i - 1]);
    }
    
    return minDiff;
};