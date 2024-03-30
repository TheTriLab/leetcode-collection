// Challenge https://leetcode.com/problems/widest-vertical-area-between-two-points-containing-no-points/

/**
 * @param {number[][]} points
 * @return {number}
 */
var maxWidthOfVerticalArea = function(points) {
    let maxWidth = 0

    let xArr = points.map((e) => e[0])
    xArr.sort((a,b) => a - b)

    console.log(xArr)
    // Area calculate between two points if no other points lies between them
    // Find maxWidth between two consecutive
    for (let i = 1; i < xArr.length; i++) {
        maxWidth = Math.max(maxWidth, xArr[i] - xArr[i-1])
    }

    return maxWidth
};